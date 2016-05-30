import {get} from '../services/api';

export const SAVE_VEHICLE = "SAVE_VEHICLE";


//how should this thing handle calling different apis for what source you want just a string?
function save(id,source){
    return {
        type:FETCH_YEARS,
        payload:get(source.name,'year'),
        meta:{id:id,source:source}
    }
}