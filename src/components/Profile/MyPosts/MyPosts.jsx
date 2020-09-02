import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let post = [
        {id: 1, message: "Hello, it's my first post lol", likesCount: 777},
        {id: 2, message: "hu a you man?", likesCount: 1327}
    ]

    let postsElements = post.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    My post
                </div>
                <textarea/>
                <button>add post</button>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;

