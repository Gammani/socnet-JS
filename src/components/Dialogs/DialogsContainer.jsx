import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }
    let onSendMessageChange = (textBody) => {
        props.store.dispatch(updateNewMessageBodyAC(textBody));
    }


    return (
        <Dialogs
            dialogsPage={state}
            sendMessage={onSendMessageClick}
            sendMessageChange={onSendMessageChange}
        />
    )
}

export default DialogsContainer;