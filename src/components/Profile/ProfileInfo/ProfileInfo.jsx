import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.wrapper}>
            {/*<div className={s.hat}>*/}
            {/*    <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt={"заставка"}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt={"аватар пользователя"}/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div>
                    Обо мне: {props.profile.aboutMe ? props.profile.aboutMe : "-"}
                </div>
                <div>
                    <h1>Мои контакты</h1>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts?.website}</div>
                    <div>{props.profile.contacts?.vk}</div>
                    <div>{props.profile.contacts?.twitter}</div>
                    <div>{props.profile.contacts?.instagram}</div>
                    <div>{props.profile.contacts?.youtube}</div>
                    <div>{props.profile.contacts?.github}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;