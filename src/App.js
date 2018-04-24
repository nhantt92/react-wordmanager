import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  onToggleForm = () => {
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });
  }

  // onFilter = (filterName, filterStatus) => {
  //   filterStatus = parseInt(filterStatus, 10);
  //   //console.log(filterName + '-' + filterStatus + '-' + typeof (filterStatus));
  //   this.setState({
  //     filter: {
  //       name: filterName.toLowerCase(),
  //       status: filterStatus
  //     }
  //   })
  // }

  // onSearch = (keyword) => {
  //   this.setState({
  //     keyword: keyword
  //   });
  // }

  // onSort = (sortBy, sortValue) => {
  //   this.setState({
  //     sort: {
  //       by: sortBy,
  //       value: sortValue
  //     }
  //   });
  // }

  render() {
    var { isDisplayForm } = this.props;
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     })
    //   }
    //   tasks = tasks.filter((task) => {
    //     if (filter.status === -1)
    //       return task;
    //     else
    //       return task.status === (filter.status === 1 ? true : false);
    //   })
    // }
    // if (keyword) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyword) !== -1;
    //   });
    // }
    // if(sort.by === 'name'){
    //   tasks.sort((a,b)=>{
    //     if(a.name.toLowerCase() > b.name.toLowerCase()) return sort.value;
    //     else if(a.name.toLowerCase() < b.name.toLowerCase()) return -sort.value;
    //     else return 0;
    //   });
    // }
    // else{
    //   tasks.sort((a,b)=>{
    //     if(a.status < b.status) return sort.value;
    //     else if(a.status > b.status) return -sort.value;
    //     else return 0;
    //   });
    // }
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1> <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            <TaskForm />
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span
                className="fa fa-plus mr-5"
              >
              </span>
              &nbsp;
              Thêm Công Việc
                </button>
            &nbsp;
            <Control
              onSearch={this.onSearch}
              onSort={this.onSort} />
            <br />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  onFilter={this.onFilter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onClearTask: (task) => {
      dispatch(actions.updateItem(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
