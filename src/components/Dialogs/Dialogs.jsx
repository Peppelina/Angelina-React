import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => {return <DialogItem name ={dialog.name} id = {dialog.id}/> })
    let messagesElements = state.messages.map(message => {return <Message message = {message.message}/>})

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onNewMessageChange}
                              value={state.newMessageText}
                              placeholder='Enter message'/>
                </div>
                <div>
                    <button onClick = {onSendMessageClick}> Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs