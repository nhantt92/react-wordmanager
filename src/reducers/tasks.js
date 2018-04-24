import * as types from './../constants/ActionTypes';

var s4 = () => {
    return Math.floor((1 * Math.random()) * 0x10000).toString(16).substring(1);
}

var randomID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4();
}

var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id)
            result = index;
    });
    return result;
}

var data = JSON.parse(localStorage.getItem('tasks'));
var initialSate = data ? data : '';

var myReducer = (state = initialSate, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            //console.log(action);
            var newTask = {
                id: randomID,
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            var index = findIndex(state, action.id);
            // if(index !== -1) {
            //     //state[index].status = !state[index].status;
            //     var cloneTask = {...state[index]}
            //     cloneTask.status = !cloneTask.status;
            //     state[index] = cloneTask;
            // }
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default: return state;
    }
}

export default myReducer;

