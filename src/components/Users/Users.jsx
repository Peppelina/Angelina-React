import React from "react";
import classes from './Users.module.css'
import UserItem from "./UserItem/UserItem";

let Users = (props) => {

        let usersElements = props.users.map(user => <UserItem user={user} follow={props.follow} unfollow={props.unfollow}/>) //данные берем из стейта

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); /* кол во страниц , округляем до большего*/

        let pages = []; /* 1 2 3 4 ...*/
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={classes.wrapperPageNumbers}>
                    {pages.map( page => <span className={props.currentPage === page ? classes.currentPage: classes.page }
                    onClick={(e) => {props.onPageChanged(page)}}
                    > {page}</span>)}
                </div>

                <div className={classes.wrapperUsers}>
                    {usersElements}
                </div>
            </div>
        )
    }


export default Users