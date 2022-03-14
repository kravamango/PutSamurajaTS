import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {arrayForPostType} from "../../App";


type PropsTypeForProfile = {
    arrayForPost:Array<arrayForPostType>
    addPost:(postMessage: string)=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}

const Profile = (props:PropsTypeForProfile) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText}
                     newPostText={props.newPostText}
                     arrayForPost={props.arrayForPost}
                     addPost={props.addPost}/>
        </div>

    )
}
export default Profile;

