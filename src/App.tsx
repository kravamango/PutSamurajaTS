import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Friend from "./components/Friends/Friend/Friend";

export type PropsType = {
    state: {
        profilePage:{
            arrayForPost:Array<arrayForPostType>
            newPostText:string
            sideBar:{
                friend:Array<friendType>
            }
        }
        messagePage:{
            messagesData:Array<messagesDataType>
            dialogsData:Array<dialogsDataType>
        }
    }
    addPost:(postMessage: string)=>void
    updateNewPostText:(newText:string)=>void
}
export type dialogsDataType = {
    id:number
    name:string
    img:string


}
export type messagesDataType = {
    id:number
    message:string
}
export type arrayForPostType = {
    id:number
    name:string
    like:number
}
export type friendType = {
    id:number
    name:string
    img:string
}

const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wraper'>
                <Header/>
                <Navbar/>
                <div className='app-wraper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile updateNewPostText={props.updateNewPostText}
                                                                 newPostText={props.state.profilePage.newPostText}
                                                                 arrayForPost={props.state.profilePage.arrayForPost}
                                                                 addPost={props.addPost}/>}/>
                        <Route path='/message' element={<Dialogs messagesData={props.state.messagePage.messagesData}
                                                                 dialogsData={props.state.messagePage.dialogsData}/>}/>

                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        <Route path='/Friend' element={<Friend friend={props.state.profilePage.sideBar.friend}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
