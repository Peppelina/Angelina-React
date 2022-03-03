import React from "react";
import classes from './Users.module.css'
import UserItem from "./UserItem/UserItem";
import axios from "axios";


/*[{id: 1, photoUrl:'https://klike.net/uploads/posts/2018-10/1539499416_1.jpg', followed: false, fullName: 'Angelina', status: 'Im sing', location: {city: 'Kazan', country: 'Russia'}},
    {id: 2, photoUrl: 'https://klike.net/uploads/posts/2019-07/medium/1564314059_1.jpg', followed: true, fulName: 'Viktoria', status: 'Im dance', location: {city: 'Moscow', country: 'Russia'}},
    {id: 3, photoUrl:'https://klike.net/uploads/posts/2019-07/medium/1564314087_2.jpg', followed: false, fullName: 'Vadim', status: 'Im programmist', location: {city: 'Mendeleevsk', country: 'Russia'}},
    {id: 4, photoUrl:'https://klike.net/uploads/posts/2019-07/medium/1564314090_3.jpg', followed: true, fullName: 'Anton', status: 'Im work', location: {city: 'Tolyatti', country: 'Russia'}},
]*/
const Users = (props) => {

        if (props.users.length===0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => // данные заггруюжаются в стейт
                props.setUsers (response.data.items)
            )
        }

    let usersElements = props.users.map(user => <UserItem user={user} follow={props.follow} unfollow={props.unfollow}/>) //данные берем из стейта

    return (
        <div className={classes.wrapperUsers}>
            {usersElements}
        </div>
    )
}

export default Users