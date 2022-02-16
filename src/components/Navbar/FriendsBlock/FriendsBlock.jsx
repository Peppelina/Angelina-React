import React from 'react';
import classes from './FriendsBlock.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

const FriendsBlock = (props) => {
    debugger
    return (
        <div className={classes.friendsBlock}>
            {props.state.map(friend => {return <FriendsItem name={friend.name} avatarImg={friend.avatarUrl}/>} )}
        </div>
    );
}

export default FriendsBlock;