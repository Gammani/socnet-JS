import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={s.active}>Kleo</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={s.active}>Hiperion</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={s.active}>Suzi</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={s.active}>Gektar</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5" activeClassName={s.active}>Chuck</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi there</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Helo man!</div>
            </div>
        </div>
    )
}

export default Dialogs;