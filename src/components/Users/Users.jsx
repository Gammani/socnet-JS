import React from "react";
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://avatarko.ru/img/kartinka/1/multfilm_gomer.png',
                followed: true,
                fullName: "Leha",
                status: "Yo",
                location: {city: "Devyatkino", country: "Russia"}
            },
            {
                id: 2,
                photoUrl: 'https://avatarko.ru/img/kartinka/1/multfilm_gomer.png',
                followed: true,
                fullName: "Suzi",
                status: "I'm fine",
                location: {city: "New York", country: "USA"}
            },
            {
                id: 3,
                photoUrl: 'https://avatarko.ru/img/kartinka/1/multfilm_gomer.png',
                followed: true,
                fullName: "Fai",
                status: "Hi hi",
                location: {city: "Pattaya", country: "Thailand"}
            },
            {
                id: 4,
                photoUrl: 'https://avatarko.ru/img/kartinka/1/multfilm_gomer.png',
                followed: true,
                fullName: "Daenerys",
                status: "Where is my Dragons?",
                location: {city: "Royal Harbor", country: "Seven Kingdoms"}
            },
            {
                id: 5,
                photoUrl: 'https://avatarko.ru/img/kartinka/1/multfilm_gomer.png',
                followed: false,
                fullName: "name",
                status: "online",
                location: {city: "city", country: "country"}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt={"аватар"}/>
                        </div>
                        <div>
                           {u.followed ?
                               <button onClick={() => {
                                   props.unFollow(u.id)
                               }}>UnFollow</button> :
                               <button onClick={() => {
                                   props.follow(u.id)
                               }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;