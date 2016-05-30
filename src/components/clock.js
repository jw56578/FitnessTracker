import React, {Component,PropTypes} from 'react';

class App extends Component
{
    constructor(props, context) {
        super(props, context);
    }

    render(){
        var elm = this.props.elapsedMilliseconds;
        var ms = elm % 1000;
        ms = ms === 1000 || ms ==- 0 ? '000' : ms;
        var seconds = Math.floor(elm / 1000) % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        var minutes = Math.floor(elm / 60000) % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var hours = Math.floor(elm / 3600000) % 60;
        hours = hours < 10 ? '0' + hours : hours;
       
        return (<div>{hours} : {minutes} : {seconds}</div>)
    }
}
export default App;