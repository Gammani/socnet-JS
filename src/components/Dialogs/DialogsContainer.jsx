import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMassageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }
    let onSendMessageChange = (textBody) => {
        props.store.dispatch(updateNewMessageBodyAC(textBody));
    }


    return (
        <Dialogs
            sendMessage={onSendMessageClick}
            sendMessageChange={onSendMessageChange}
            dialogsElements={dialogsElements}
            messagesElements={messagesElements}
            newMessageBody={newMessageBody}
        />
    )
}

export default DialogsContainer;