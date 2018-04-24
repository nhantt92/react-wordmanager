import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskItem extends Component {
    onUpdateStatus=()=>{
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDeleteItem=()=>{
        this.props.onDeleteItem(this.props.task.id);
    }

    onUpdateItem=()=>{
        this.props.onUpdateItem(this.props.task.id);
    }
    render() {
        var {task, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={ task.status ? 'label label-success' : 'label label-danger'}
                        onClick={this.onUpdateStatus}
                        >{task.status? 'Kích Hoạt':'Ẩn'}
                        </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick = {this.onUpdateItem}
                        >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick = {this.onDeleteItem}
                        >
                        <span className="fa fa-trash mr-5"></span>Xoá
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
   return {
   };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
