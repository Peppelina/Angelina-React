import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/state";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => {return <DialogItem name ={dialog.name} id = {dialog.id}/> })
    let messagesElements = state.messages.map(message => {return <Message message = {message.message}/>})

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateNewMessageTextCreator(text))
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