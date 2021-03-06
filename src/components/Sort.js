import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component {

    onClick = (sortBy, sortValue) => {
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sắp Xếp <span className="fa fa-arrow-alt-circle-down mr-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a
                                role="button"
                                className={(this.props.sort.by === 'name' && this.props.sort.value === 1) ? 'sort_selected' : ''}
                            >
                                <span className="fas fa-sort-alpha-up pr-5"> &nbsp;
                                    Tên A-Z
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a
                                role="button"
                                className={(this.props.sort.by === 'name' && this.props.sort.value === -1) ? 'sort_selected' : ''}
                            >
                                <span className="fas fa-sort-alpha-down pr-5"> &nbsp;
                                    Tên Z-A
                                </span>
                            </a></li>
                        <li role="button" className="divider"></li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <a
                                role="button"
                                className={(this.props.sort.by === 'status' && this.props.sort.value === 1) ? 'sort_selected' : ''}
                            >
                                <span className="fas fa-bell"></span> &nbsp;
                                Trạng Thái Kích Hoạt
                            </a></li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a
                                role="button"
                                className={(this.props.sort.by === 'status' && this.props.sort.value === -1) ? 'sort_selected' : ''}
                            >
                                <span className="fas fas fa-bell-slash"></span> &nbsp;
                                Trạng Thái Ẩn
                            </a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
