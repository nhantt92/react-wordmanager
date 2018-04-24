import * as types from './../constants/ActionTypes';

var initialSate = {
    id: '',
    name: '',
    status: false
};

var myReducer = (state = initialSate, action) => {
    switch(action.type)
    {
        case types.UPDATE_ITEM:
            //console.log(action);
            //state = action.task;
            //console.log(state);
            return action.task;
        default: return state;
    }
}

export default myReducer;

 // onUpdateItem = (id) => {
  //   var { tasks } = this.state;
  //   var index = this.findIndex(id);
  //   var taskEditing = tasks[index];
  //   //console.log(taskEditing);
  //   this.setState({
  //     taskEditing: taskEditing
  //   });
  //   this.onShowForm();
  // }