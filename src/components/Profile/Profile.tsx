import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type PropsTypeForProfile = {
    store:any
}

const Profile = (props:PropsTypeForProfile) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>

    )
}
export default Profile;

