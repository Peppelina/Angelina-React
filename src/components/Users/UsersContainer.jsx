import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleSetIsFetching,
    unfollow
} from "../../redux/users-reducer";
import axios from "axios";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleSetIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => { // данные заггруюжаются в стейт
                    this.props.toggleSetIsFetching(false)
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            )
    }

    onPageChanged = (numberPage) => {
        this.props.toggleSetIsFetching(true)
        this.props.setCurrentPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then(response => {// данные заггруюжаются в стейт
                this.props.toggleSetIsFetching(false);
                this.props.setUsers(response.data.items);
                }
            )
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        ...state.usersPage /*возваращает все что есть в массиве под их именами*/
    }
}


export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,toggleSetIsFetching})(UsersContainer);



