import React from 'react';
import s from './Dialogs.module.css'


const Dialogs = (props) => {

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onSendMessageChange = (e) => {
        let textBody = e.target.value;
        props.sendMessageChange(textBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {props.messagesElements}</div>
                <div><textarea onChange={onSendMessageChange} value={props.newMessageBody} placeholder={'Enter your message'}></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;