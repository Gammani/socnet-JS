import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newTextElement = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch({type: "ADD-POST"});
    }

    let onPostChange = () => {
        let text = newTextElement.current.value;
        // props.updateNewPostText(text);
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
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

