import {FETCH_YEARS} from '../actions/vehicle-selector';
import {FETCH_MAKES} from '../actions/vehicle-selector';
import {FETCH_MODELS} from '../actions/vehicle-selector';
import {FETCH_OPTIONS} from '../actions/vehicle-selector';

import {YEAR_CHANGED} from '../actions/vehicle-selector';
import {MAKE_CHANGED} from '../actions/vehicle-selector';
import {MODEL_CHANGED} from '../actions/vehicle-selector';
import {TRIM_CHANGED} from '../actions/vehicle-selector';
import {OPTIONS_CHANGED} from '../actions/vehicle-selector';
function GetYears(state=null,action){
    switch(action.type){
        case FETCH_YEARS:
            var source = action.meta.source.name;
            if(state===null || !state[source]){
                var obj = {};
                obj[source] = action.payload.data;
                return Object.assign({}, state, obj);
            }
    }
    return state;
}
function GetMakes(state=null,action){
    switch(action.type){
        case FETCH_MAKES:
            var source = action.meta.source.name;
            var year = action.meta.year;
            if(state===null || !state[source]){
                var obj = {};
                obj[source] = {};
                obj[source][year] = action.payload.data;
                return Object.assign({}, state, obj);
            }
            if(!state[source][year]){
                var s = Object.assign({}, state, {});
                s[source][year] = action.payload.data
                return s;
            }
    }
    return state;
}
function GetModels(state=null,action){
    switch(action.type){
        case FETCH_MODELS:
            return action.payload.data;
    }
    return state;
}
function GetOptions(state=null,action){
    switch(action.type){
        case FETCH_OPTIONS:
            return action.payload.data;
    }
    return state;
}
function SetYear(state=null,action){
    if(state && action.meta && state.id !== action.meta.id)
        return state;
    switch(action.type){
        case YEAR_CHANGED:
            return {id:action.meta.id,year:action.payload};
    }
    return state;
}
function SetMake(state=null,action){
    if(state && action.meta && state.id !== action.meta.id)
        return state;
    switch(action.type){
        case MAKE_CHANGED:
            return {id:action.meta.id,make:action.payload};
    }
    return state;
}
function SetModel(state=null,action){
    if(state && action.meta && state.id !== action.meta.id)
        return state;
    switch(action.type){
        case MODEL_CHANGED:
            return {id:action.meta.id,model:action.payload};
    }
    return state;
}
function SetOption(state=null,action){
    if(state && action.meta && state.id !== action.meta.id)
        return state;
    switch(action.type){
        case OPTIONS_CHANGED:
            return {id:action.meta.id,options:action.payload};
    }
    return state;
}
var vehicleSelectorReducers = {
    vehicleSelectorYears:GetYears,
    vehicleSelectorMakes:GetMakes,
    vehicleSelectorModels:GetModels,
    vehicleSelectorOptions:GetOptions,
    vehicleSeletorTrims:null,
    vehicleSelectorYear: SetYear,
    vehicleSelectorMake:SetMake,
    vehicleSelectorModel:SetModel,
    vehicleSelectorOption:SetOption

}
export {vehicleSelectorReducers};
export {GetYears};
export {GetMakes};
export {SetYear};
export {GetModels}
export {SetOption}