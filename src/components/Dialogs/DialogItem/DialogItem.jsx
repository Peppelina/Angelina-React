import React from 'react';
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    const activeDialogsItem = () => {
        return navActive => navActive.isActive ? classes.active : classes.dialog
    }
    let path = "/dialogs/" + props.id;
    return(
            <NavLink className= {activeDialogsItem()} to={path}> {props.name}</NavLink>
    )
}

export default DialogItem