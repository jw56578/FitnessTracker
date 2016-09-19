import React, {Component,PropTypes} from 'react';
import {vibrate} from '../services/vibrate';
import {confirm} from '../services/dialogs';
import {get,save} from '../services/store';
import Stopwatch  from  'timer-stopwatch';
import Clock from './clock';
 
class App extends Component
{
    constructor(props, context) {
        super(props, context);
        this.doVibrate = this.doVibrate.bind(this);
        this.createNewSession = this.createNewSession.bind(this);
        this.setupActivities = this.setupActivities.bind(this);
        this.onActivity = this.onActivity.bind(this);
        this.activityChanged = this.activityChanged.bind(this);
        this.startActivity = this.startActivity.bind(this);
        this.lap = this.lap.bind(this);
        this.stopwatch = new Stopwatch(); 
        this.stopwatch.onTime((time) => {
            this.setState({elapsedMilliseconds :time.ms});
        });
        this.state = {elapsedMilliseconds : 0};
        this.activityStopwatch = new Stopwatch();
        get('activity',this.onActivity)
        
    }
    activityChanged(e){
        this.setState({currentActivityId:e.target.value});
    }
    onActivity(activities){
        this.setState({currentActivityId:activities[0].id});
        this.setState({activities:activities});
    }
    doVibrate(){
         vibrate(100);
    }
    createNewSession(){
        var session ={name:new Date().toString()};
        this.setState({currentActivitySet:null});
        this.setState({currentSession:save('session',session)});
        this.stopwatch.start();
    }
    setupActivities(){
        var activities = ['High Squat','Low Squat','Deadlift','Bench Press','Dumbell Press','Overhead Press','Dip','Cable Fly','Standing Barbell Row','Seated Machine Row','Machine Pull Down'];
        for(var a in activities){
            save('activity',{name:activities[a]});
        }
    }
    startActivity(){
        var as = save('activitySet',{
            sessionId:this.state.currentSession.id,
            activityId:this.state.currentActivityId,
            restSeconds:120,
            reps:[]
        })
        this.setState({currentActivitySet:as});
        
    }
    lap(){
        if(!this.state.repCount)
            return;
        var as = this.state.currentActivitySet;
        as.reps.push({number:this.state.repCount,elapsedSeconds:this.state.elapsedMilliseconds/1000});
        save('activitySet',as); 
        this.setState({currentActivitySet:as,repCount:null});
    }
    render(){
        var buttonStyle = {width:'100%',height:'4em'};
        var btnSetupActivites = this.state.activities && this.state.activities.length > 0 ? '': <button onClick={()=>this.setupActivities()} style={buttonStyle}>Setup Activities</button>;
        var txtReps = this.state.currentActivitySet ? <input type="number" value={this.state.repCount} onChange={(e)=>this.setState({repCount:e.target.value})} style={{width:'100%'}}></input>: '';
        var btnLap = this.state.currentActivitySet ? <button onClick={this.lap} style={buttonStyle}>Lap</button> : '';
        var btnStartActivity = this.state.currentSession ? <button onClick={this.startActivity} style={buttonStyle}>Start Activity</button> : '';
        return (
            <div style={{height:'100%'}}>
                <div style={{position:'relative',height:'100%',minHeight:'100%',margin: '0 auto -4em'}}>
                    {btnSetupActivites}
                    <button onClick={this.createNewSession} style={buttonStyle}>New Session</button>
                    {btnStartActivity}
                    {btnLap}
                    {txtReps}
                    Current Session: {this.state.currentSession ? this.state.currentSession.name : '' }
                    <select style={{width:'100%',height:'5em'}} onChange={this.activityChanged}>
                        {this.state.activities && this.state.activities.map(function(a){
                            return <option key={a.id} value={a.id}>{a.name}</option>
                        })}
                    </select>
                    <Clock elapsedMilliseconds = {this.state.elapsedMilliseconds}/>
                    <div>
                        {this.state.currentActivitySet && this.state.currentActivitySet.reps.map(function(rep){
                            return <div> {rep.number} - {Math.floor(rep.elapsedSeconds/ 60)} : {Math.floor(rep.elapsedSeconds) % 60}</div>
                        })}
                    </div>
                    <div style={{height: '4em'}}></div>
                </div>
                <div style={{height: '4em'}}>
                    
                </div>
            </div>
            
        )
    }
}
export default App;