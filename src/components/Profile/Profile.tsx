import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {arrayForPostType} from "../../App";

type PropsTypeForProfile = {
    arrayForPost:Array<arrayForPostType>
}

const Profile = (props:PropsTypeForProfile) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts arrayForPost={props.arrayForPost}/>
        </div>

    )
}
export default Profile;

