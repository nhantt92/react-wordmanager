import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      status : false
    }
  }
  
  onChange=(event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status'){
      value =  target.value === 'true'? true : false;
    }
    this.setState({
      [name]: value
    });
  }

  onSubmit=(event)=>{
    event.preventDefault();
    //this.props.onSubmit(this.state);
    this.props.onAddTask(this.state);
    this.onClear();
    //this.onCloseForm();
  }

  onClear=()=>{
    this.setState({
      name: '',
      status: false
    });
  }

  onOpenForm = () => {
    this.props.onOpenForm();
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  render() {
    var {id} = this.state;
    return (
      <div>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              {id!== '' ? 'Cập Nhật Công Việc':'Thêm Công Việc'}
              &nbsp;
                <span 
                  className="fas fa-times-circle text-right"
                  onClick={this.onCloseForm}
              ></span>
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Tên: </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <label>Trạng Thái: </label>
              <select
                className = "form-control"
                name = "status"
                defaultValue = {this.state.status}
                onChange = {this.onChange}
                >
                <option value={'true'} >Kích Hoạt</option>
                <option value={'false'} >Ẩn</option>
                </select><br/>
              <button
                type="submit"
                className="btn btn-warning"
                name= 'btnSave'
              >
                <span className="fa fa-plus"></span>
                &nbsp;
                  Lưu Lại
                    </button>
              &nbsp;
                    <button
                type="button"
                className="btn btn-danger"
                name='btnCancle'
                onClick = {this.onClear}
              >
                <span className="fa fa-times-circle"></span>
                &nbsp;
                Huỷ Bỏ
                    </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, props)=>{
  return {
   onAddTask: (task) => {
    dispatch(actions.addTask(task));
   },
    onOpenForm : () => {
    dispatch(actions.openForm());
  },
    onCloseForm : () => {
      dispatch(actions.closeForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
