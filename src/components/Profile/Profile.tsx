import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {arrayForPostType} from "../../App";

type PropsTypeForProfile = {
    arrayForPost:Array<arrayForPostType>
    newPostText:string
    dispatch:(action:any)=>void
}

const Profile = (props:PropsTypeForProfile) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch}
                     arrayForPost={props.arrayForPost}
                     newPostText={props.newPostText}
                     />
        </div>

    )
}
export default Profile;

