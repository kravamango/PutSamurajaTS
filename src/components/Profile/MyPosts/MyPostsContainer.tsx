import React from 'react';
import {addPostAC, onPostChangeAC} from "../../../redux/profilePageReducer";
import MyPosts from './MyPosts';

type PropsTypeForMyPosts = {
    store:any
}

const MyPostsContainer = (props: PropsTypeForMyPosts) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    };
    const onPostChange = (text:string) => {
        props.store.dispatch(onPostChangeAC(text))
    }

    return <MyPosts arrayForPost={state.profilePage.arrayForPost}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                    updateNewPostText={onPostChange}/>
}

export default MyPostsContainer;

