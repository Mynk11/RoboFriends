import {
    CHANGE_SEARCH_FIELD
} from "./constants";

const initialState = {
    searchField: ''
}

export const searchRobots = (state = initialState, action = {}) => {

    if (action.type === CHANGE_SEARCH_FIELD) {
        console.log("State does Change");
        return Object.assign({}, state, {
            searchField: action.payload
        });

    } else {
        console.log("State doesn't Change");
        return state;
    }


}