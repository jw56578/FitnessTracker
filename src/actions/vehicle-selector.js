import {get,post} from '../services/api';

export const FETCH_YEARS = "FETCH_YEARS";
export const FETCH_MAKES = "FETCH_MAKES";
export const FETCH_MODELS = "FETCH_MODELS";
export const FETCH_OPTIONS = "FETCH_OPTIONS";

export const YEAR_CHANGED = "YEAR_CHANGED";
export const MAKE_CHANGED = "MAKE_CHANGED";
export const MODEL_CHANGED = "MODEL_CHANGED";
export const TRIM_CHANGED = "TRIM_CHANGED";
export const OPTIONS_CHANGED = "OPTIONS_CHANGED";

//how should this thing handle calling different apis for what source you want just a string?
function fetchYears(id,source){
    return {
        type:FETCH_YEARS,
        payload:get(source.name,'year'),
        meta:{id:id,source:source}
    }
}
function fetchMakes(id, source,year){
    return {
       type:FETCH_MAKES,
       payload:get(source.name,'make',year),
       meta:{id:id,year:year,source:source}
    }
}
function fetchModels(id, source,make){
    return {
       type:FETCH_MODELS,
       payload:post(source.name,'model',make),
       meta:{id:id,make:make,source:source}
    }
}
function fetchOptions(id, source,model){
    return {
       type:FETCH_OPTIONS,
       payload:post(source.name,'option',model),
       meta:{id:id,model:model,source:source}
    }
}
function setYear(id, year){
     return {
       type:YEAR_CHANGED,
       payload:year,
       meta:{id:id}
    }
}
function setMake(id, make){
    return {
       type:MAKE_CHANGED,
       payload:make,
       meta:{id:id}
    }
}
function setModel(id,model){
    return {
       type:MODEL_CHANGED,
       payload:model,
       meta:{id:id}
    }
}
function setOption(id,opt){
    return {
       type:OPTIONS_CHANGED,
       payload:opt,
       meta:{id:id}
    }
}
export {fetchYears};
export {fetchMakes};
export {setYear};
export {setMake};
export {setModel};
export {setOption};
export {fetchModels}
export {fetchOptions}
export {OPTIONS_CHANGED}
