import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (<nav className={classes.nav}>
        <div>
            <NavLink to='/profile' className = { navActive => navActive.isActive ? classes.active : classes.item} >Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' className = { navActive => navActive.isActive ? classes.active : classes.item}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' className = { navActive => navActive.isActive ? classes.active : classes.item}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music' className = { navActive => navActive.isActive ? classes.active : classes.item}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' className = { navActive => navActive.isActive ? classes.active : classes.item}>Settings</NavLink>
        </div>
    </nav>);
}

export default Navbar;