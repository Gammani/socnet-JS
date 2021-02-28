import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage;


                let onSendMessageClick = () => {
                    store.dispatch(sendMessageAC());
                }
                let onSendMessageChange = (textBody) => {
                    store.dispatch(updateNewMessageBodyAC(textBody));
                }
                return (
                    <Dialogs
                        dialogsPage={state}
                        sendMessage={onSendMessageClick}
                        sendMessageChange={onSendMessageChange}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;