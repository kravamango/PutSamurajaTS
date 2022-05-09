import React, {useRef} from 'react';
import m from "./MyPosts.module.css"
import Post from "./Post/Post";
import {arrayForPostType} from "../../../App";
import {addPostAC, onPostChangeAC} from "../../../redux/profilePageReducer";

type arrayForPostPropsType = {
    id: number
    name: string
    like: number
}
type PropsTypeForMyPosts = {
    arrayForPost: Array<arrayForPostType>
    newPostText: string
    dispatch: (action: any) => void
}

const MyPosts = (props: PropsTypeForMyPosts) => {
    let arrayForPostElement = props.arrayForPost.map((el: arrayForPostPropsType) => <React.Fragment key={el.id}><Post
        message={el.name} like={el.like}/></React.Fragment>)

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        props.dispatch(addPostAC())
    };
    const onPostChange = () => {
        if (newPostElement && newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(onPostChangeAC(text))
        }
    }

    return (
        <div className={m.item}>
            <h3 className={m.text}>My posts</h3>
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}
                      placeholder={'New Post'}/>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div/>
            {arrayForPostElement}
        </div>
    )
}
export default MyPosts;

