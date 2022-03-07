import React from "react";
import classes from './UserItem.module.css'
import userPhoto from '../../../images/user.png'
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.photoButton}>
                <div className={classes.avatarUser}>
                    <NavLink to={'profile/' + props.user.id} >
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </div>
                <div>
                    {props.user.followed
                        ? <button onClick={() => {props.unfollow(props.user.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(props.user.id)}}>Follow</button>}
                </div>
            </div>

            <div className={classes.itemInfo}>
                <div className={classes.nameStatus}>
                    <div className={classes.name}>{props.user.name}</div>
                    <div className={classes.status}>{props.user.status ? props.user.status : 'Статус'}</div>
                </div>

                <div className={classes.cityCountry}>
                    <div className={classes.city}>{'city'}</div>
                    <div className={classes.country}>{'country'}</div>
                </div>
            </div>
        </div>
    )
}

export default UserItem