import React from "react";
import classes from './Users.module.css'

const Users = (props) => {

    if (props.users.length===0) {
        props.setUsers (
            [{id: 1, photoUrl:'https://klike.net/uploads/posts/2018-10/1539499416_1.jpg', followed: false, fullName: 'Angelina', status: 'Im sing', location: {city: 'Kazan', country: 'Russia'}},
                {id: 2, photoUrl: 'https://klike.net/uploads/posts/2019-07/medium/1564314059_1.jpg', followed: true, fulName: 'Viktoria', status: 'Im dance', location: {city: 'Moscow', country: 'Russia'}},
                {id: 3, photoUrl:'https://klike.net/uploads/posts/2019-07/medium/1564314087_2.jpg', followed: false, fullName: 'Vadim', status: 'Im programmist', location: {city: 'Mendeleevsk', country: 'Russia'}},
                {id: 4, photoUrl:'https://klike.net/uploads/posts/2019-07/medium/1564314090_3.jpg', followed: true, fullName: 'Anton', status: 'Im work', location: {city: 'Tolyatti', country: 'Russia'}},
            ]
        )
    }


    return (
        <div className={classes.wrapperUsers}>
            {props.users.map(user =>
                    <div>
                        <span>
                            <div className={classes.avatarUser}><img src={user.photoUrl} alt=""/></div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {props.unfollow(user.id)} }>Unfollow</button>
                                    : <button onClick={() => {props.follow(user.id)} }>Follow</button>
                                }
                            </div>
                        </span>

                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>

                        <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users