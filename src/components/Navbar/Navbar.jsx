import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBlock from "./FriendsBlock/FriendsBlock";

const Navbar = (props) => {
    const activeDialogsItem = () => {
        return navActive => navActive.isActive ? classes.active : classes.item
    }

    return (
        <nav className={classes.nav}>
            <div className={classes.linkWrapper}>
                <div>
                    <NavLink to='/profile' className={activeDialogsItem()}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' className={activeDialogsItem()}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news' className={activeDialogsItem()}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music' className={activeDialogsItem()}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings' className={activeDialogsItem()}>Settings</NavLink>
                </div>
            </div>
            <FriendsBlock state={props.state.friendsBlock}/>
        </nav>
    );

}

export default Navbar;