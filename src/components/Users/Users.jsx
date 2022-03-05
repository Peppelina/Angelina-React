import React from "react";
import classes from './Users.module.css'
import UserItem from "./UserItem/UserItem";
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => { // данные заггруюжаются в стейт
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        )
    }

    onPageChanged (numberPage) {
        this.props.setCurrentPage(numberPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then(response => // данные заггруюжаются в стейт
                this.props.setUsers (response.data.items)
            )
    }

    render() {

        let usersElements = this.props.users.map(user => <UserItem user={user} follow={this.props.follow} unfollow={this.props.unfollow}/>) //данные берем из стейта

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize); /* кол во страниц , округляем до большего*/

        let pages = []; /* 1 2 3 4 ...*/
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={classes.wrapperPageNumbers}>
                    {pages.map( page => <span className={this.props.currentPage === page ? classes.currentPage: classes.page }
                    onClick={(e) => {this.onPageChanged(page)}}
                    > {page}</span>)}
                </div>

                <div className={classes.wrapperUsers}>
                    {usersElements}
                </div>

            </div>
        )
    }
}

export default Users