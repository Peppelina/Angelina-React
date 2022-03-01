import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => {return <DialogItem name ={dialog.name} id = {dialog.id}/> })
    let messagesElements =props.messages.map(message => {return <Message message = {message.message}/>})

       return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange = { (event) =>
                    {props.onNewMessageChange(event.target.value) } }
                              value={props.newMessageText}
                              placeholder='Enter message'/>
                </div>
                <div>
                    <button onClick = {props.onSendMessageClick}> Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs