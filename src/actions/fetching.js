export const IS_FETCHING = "IS_FETCHING";
export const DONE_FETCHING = "DONE_FETCHING";

function isFetching(key){
    return {
        type:IS_FETCHING,
        payload:key
    }
}

export{isFetching};