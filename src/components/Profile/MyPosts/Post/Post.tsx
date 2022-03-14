import React from 'react';
import m from "./Post.module.css";

type PropsType = {
    message: string
    like:number
}

const Post = (props: PropsType) => {
    return (
        <div className={m.item}>
            <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'/>
            <div>{props.message}</div>
            <div>
                <span>{props.like}like</span>
            </div>

        </div>
    )
}
export default Post;

