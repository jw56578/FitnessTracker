import axios from 'axios';
import {getChildCompanyId,getParentCompanyId,getIntegrationCredentials} from './authentication';
import {apiURL} from './service-locator';

var root = apiURL;

function getConfig(){
    var config = {
        headers: {
            'Child-Company-Id': getChildCompanyId(),
            'Parent-Company-Id': getParentCompanyId()
        }
    } 
    var creds = getIntegrationCredentials();
   for(var ic in creds){
       config.headers['elead-ic-' + ic] = creds[ic];
   }
   return config;
}
function get(cntrl,action,...prmtrs){
    var path = cntrl + (action ? '/' + action : '' );
    for(var prm in prmtrs){
       path += (prmtrs[prm] ? '/' + prmtrs[prm] : '' ) ;
    } 
    var request = axios.get(root + path,getConfig());
    return request;
}
function post(cntrl,action,data){
    var path = cntrl + (action ? '/' + action : '' );
    var request = axios.post(root + path,data,getConfig());
    return request;
}
export {get};
export {post};
