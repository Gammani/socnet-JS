import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                <div>
                    My post
                </div>
                <textarea/>
                <button>add post</button>
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;

