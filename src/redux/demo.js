import { createStore } from 'redux';


var initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1
    }
}

var myReducer = (state = initialState, action)=> {
    if(action.type === 'TOGGLE_STATUS')
    {
        state.status = ! state.status;
    }
    if(action.type === 'SORT')
    {   
        var { by , value } = action.sort;
        var {status} = state;
        return {
                status: status,
                sort : {
                    by: by,
                    value: value
                }   
        };
    }
    return state;
}

const store = createStore(myReducer);
console.log('State Default: ', store.getState());

var action = {type : 'TOGGLE_STATUS'};

store.dispatch(action);
console.log('Toggle_status: ', store.getState());

var sortAction = {type: 'SORT', 
                sort: {
                    by: 'status',
                    value: -1
                }
            }
store.dispatch(sortAction);
console.log('Sort: ', store.getState());