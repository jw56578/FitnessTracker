import {get,post} from '../services/api';

export const SAVE_ENTITY = "SAVE_ENTITY";
export const GET_ENTITY = "GET_ENTITY";

//how should this thing handle calling different apis for what source you want just a string?
function save(type,obj){
    return {
        type:SAVE_ENTITY,
        payload:post(type,'save',obj),
        meta:{type:type}
    }
}
function getEntity(type,obj){
    return {
        type:GET_ENTITY,
        payload:get(type,'get',obj),
        meta:{type:type}
    }
}
export{save};
export{getEntity}