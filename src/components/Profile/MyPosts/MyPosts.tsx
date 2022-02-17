import React from 'react';
import m from  "./MyPosts.module.css"
import Post from "./Post/Post";
import {arrayForPostType} from "../../../App";

type arrayForPostPropsType = {
    id:number
    name:string
    like:number
}
type PropsTypeForMyPosts = {
    arrayForPost:Array<arrayForPostType>
}

const MyPosts = (props:PropsTypeForMyPosts) => {
    return (
        <div className={m.item}>
            <h3 className={m.text}>My posts</h3>
            <textarea />
            <div>
                <button>Add Post</button>
            </div>
            <div/>
            {props.arrayForPost.map((el:arrayForPostPropsType) => {
                return <React.Fragment key={el.id}>
                    <Post message={el.name} like={el.like}/>
                </React.Fragment>
            })}
        </div>
    )
}
export default MyPosts;

