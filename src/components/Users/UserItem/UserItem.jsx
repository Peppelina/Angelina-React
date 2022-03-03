import React from "react";
import classes from './UserItem.module.css'
import userPhoto from '../../../images/user.png'

const UserItem = (props) => {
    return (
        <div>
            <span>
                <div className={classes.avatarUser}><img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt=""/></div>
                <div>
                    {props.user.followed
                        ? <button onClick={() => {props.unfollow(props.user.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(props.user.id)}}>Follow</button>}
                </div>
            </span>

            <span>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </span>

            <span>
                <div>{'props.user.location.city'}</div>
                <div>{'props.user.location.country'}</div>
            </span>
        </div>
    )
}

export default UserItem