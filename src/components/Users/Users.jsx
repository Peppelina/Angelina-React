import React from "react";
import classes from './Users.module.css'
import UserItem from "./UserItem/UserItem";
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => // данные заггруюжаются в стейт
            this.props.setUsers (response.data.items)
        )
    }

    render() {
        let usersElements = this.props.users.map(user => <UserItem user={user} follow={this.props.follow} unfollow={this.props.unfollow}/>) //данные берем из стейта

        return (
            <div className={classes.wrapperUsers}>
                {usersElements}
            </div>
        )
    }
}

export default Users