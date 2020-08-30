import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Kleo"} id={"1"}/>
                <DialogItem name={"Hiperion"} id={"2"}/>
                <DialogItem name={"Suzi"} id={"3"}/>
                <DialogItem name={"Gektar"} id={"4"}/>
                <DialogItem name={"Chuck"} id={"5"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi there"}/>
                <Message message={"Yo"}/>
                <Message message={"Helo man!"}/>
            </div>
        </div>
    )
}

export default Dialogs;