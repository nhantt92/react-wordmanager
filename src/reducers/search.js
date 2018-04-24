import * as types from './../constants/ActionTypes';

var initialSate = '';

var myReducer = (state = initialSate, action) => {
    switch(action.type)
    {
        case types.SEARCH:
            state = action.keyword;
            //console.log(state);
            return state;
        default: return state;
    }
}

export default myReducer;