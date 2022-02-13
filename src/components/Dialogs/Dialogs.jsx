import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
            <NavLink className= { navActive => navActive.isActive ? classes.active : classes.dialog} to={path}> {props.name}</NavLink>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name = "Angelina" id = "1"/>
                <DialogItem name = "Viktoria" id = "2"/>
                <DialogItem name = "Vadim" id = "3"/>
                <DialogItem name = "Anton" id = "4"/>
                <DialogItem name = "Igor" id = "5"/>
            </div>
            <div className={classes.messages}>
                <Message message = "Hi"/>
                <Message message = "Hello"/>
                <Message message = "Hello"/>
                <Message message = "Hello"/>
                <Message message = "How are you"/>
            </div>
        </div>
    )
}
export default Dialogs