import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Kleo"},
        {id: 2, name: "Hiperion"},
        {id: 3, name: "Suzi"},
        {id: 4, name: "Gektar"},
        {id: 5, name: "Chuck"}
    ]

    let messages = [
        {id: 1, message: "Hi there"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Helo man!"}
    ]


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;