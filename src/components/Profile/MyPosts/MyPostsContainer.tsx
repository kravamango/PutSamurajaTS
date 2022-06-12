import {addPostAC, arrayForPostType, onPostChangeAC} from "../../../redux/profilePageReducer";
import MyPosts from './MyPosts';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redaxStore";
import {Dispatch} from "redux";

// type PropsTypeForMyPosts = {
//     store:any
// }
//
// const MyPostsContainer = (props: PropsTypeForMyPosts) => {
//
//     let state = props.store.getState()
//
//     const addPost = () => {
//         props.store.dispatch(addPostAC())
//     };
//     const onPostChange = (text:string) => {
//         props.store.dispatch(onPostChangeAC(text))
//     }
//
//     return <MyPosts arrayForPost={state.profilePage.arrayForPost}
//                     newPostText={state.profilePage.newPostText}
//                     addPost={addPost}
//                     updateNewPostText={onPostChange}/>
// }
//
// export default MyPostsContainer;

type MapStateToPropsType = {
    arrayForPost:Array<arrayForPostType>,
    newPostText:string
}
type MapDispatchToPropsType = {
    addPost:()=>void,
    updateNewPostText: (text: string) =>void
}
let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        arrayForPost: state.profilePage.arrayForPost,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(onPostChangeAC(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;