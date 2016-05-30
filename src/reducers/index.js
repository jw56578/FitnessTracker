import {GET_ENTITY} from '../actions/entity';

function GetEntity(state=null,action){
    switch(action.type){
        case GET_ENTITY:
            var type = action.meta.type;
            var entity = {type:type,entity:action.payload.data};
            return Object.assign({}, state, entity);
            
    }
    return state;
}
//there just needs to be a seperate reducer per type that all handle the GET_ENTITY type
function state(state=null,action){
    switch(action.type){
        case GET_ENTITY:
            var type = action.meta.type;
            if(type === 'state'){
                var entity = action.payload.data;
                return Object.assign({}, state, entity);
            }
    }
    return state;  
}

var reducers = {
    getEntity:GetEntity
}
export {reducers};
