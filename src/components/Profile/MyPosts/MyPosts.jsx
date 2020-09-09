import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newTextElement = React.createRef();

    function addPost() {
        let text = newTextElement.current.value;
        props.addPost(text);
        props.updateNewPostText("");
    }

    let onPostChange = () => {
        let text = newTextElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <div>
                    My post
                </div>
                <textarea onChange={onPostChange} ref={newTextElement} value={props.newPostText}/>
                <button onClick={addPost}>add post</button>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;

