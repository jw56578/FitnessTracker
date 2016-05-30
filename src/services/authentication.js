
var childCompanyId = 0;
var parentCompanyId = 0;
var integrationCredentials = {};

function initialize(credentials){
    childCompanyId = credentials.childCompanyId;
    parentCompanyId = credentials.parentCompanyId;
    integrationCredentials = credentials.integrationCredentials;
}
function getChildCompanyId(){
    return childCompanyId;
}
function getParentCompanyId(){
    return parentCompanyId;
}
function getIntegrationCredentials(){
    return integrationCredentials;
}
export {initialize};
export {getChildCompanyId};
export {getParentCompanyId};
export {getIntegrationCredentials};