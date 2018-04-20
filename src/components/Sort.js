import React, { Component } from 'react';
import '../App.css';
class Sort extends Component {

    constructor(props){
        super(props);
        this.state = {
            sort: {
                by: 'name',
                value: 1
            }
        }
    }

    onSort(sortBy, sortValue){
        this.setState({
            sort: {
                by: sortBy,
                value: sortValue
            }
        });
        this.props.onSort(sortBy, sortValue);
    }

    render() {
        var {sort} = this.state;
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
                        <li onClick={()=> this.onSort('name', 1)}>
                        <a 
                            role="button" 
                            className={(sort.by === 'name' && sort.value === 1)?'sort_selected':''}>
                            <span className="fas fa-sort-alpha-up pr-5"> &nbsp;
                                Tên A-Z
                                </span>
                        </a></li>
                        <li onClick={()=> this.onSort('name', -1)}>
                        <a 
                            role="button"
                            className={(sort.by === 'name' && sort.value === -1)?'sort_selected':''}>
                            <span className="fas fa-sort-alpha-down pr-5"> &nbsp;
                                Tên Z-A
                                </span>
                        </a></li>
                        <li role="button" className="divider"></li>
                        <li onClick={()=> this.onSort('status', 1)}>
                        <a 
                            role="button"
                            className={(sort.by === 'status' && sort.value === 1)?'sort_selected':''}>
                            <span className="fas fa-bell"></span> &nbsp;
                            Trạng Thái Kích Hoạt
                            </a></li>
                        <li onClick={()=> this.onSort('status', -1)}>
                        <a 
                            role="button"
                            className={(sort.by === 'status' && sort.value === -1)?'sort_selected':''}>
                            <span className="fas fas fa-bell-slash"></span> &nbsp;
                            Trạng Thái Ẩn
                            </a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;
