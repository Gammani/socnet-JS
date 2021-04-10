import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.content}>
            <div>
                <div className={s.ava}>
                    <img
                        src='https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' alt={"avatar"}/>
                    {props.message}
                    <div className={s.like}>
                        <img src='https://banner2.cleanpng.com/20181001/rhs/kisspng-like-button-social-media-image-facebook-messenger-health-insurance-life-insurance-and-medicare-plan-5bb209e2eacd98.4287911215383945949618.jpg' alt={"avatar"}/> {props.likesCount}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;