var apiURL = "";//'http://localhost/Evolution2/fresh/elead-v45/elead_track/api/index.ashx/';

if ("production" !== process.env.NODE_ENV) {
    apiURL = 'http://localhost:81/Evolution2/fresh/elead-v45/elead_track/api/index.ashx/';
}else{
    //TODO need to fix this
    apiURL = '../api/index.ashx/'
}
export {apiURL}

