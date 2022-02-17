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
        dialogsData:Array<dialogsDataType>
        messagesData:Array<messagesDataType>
        arrayForPost:Array<arrayForPostType>
        friend:Array<friendType>
    }
}
export type dialogsDataType = {
    id:number
    name:string
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
                        <Route path='/message' element={<Dialogs messagesData={props.state.messagesData} dialogsData={props.state.dialogsData}/>}/>
                        <Route path='/profile' element={<Profile arrayForPost={props.state.arrayForPost}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        <Route path='/Friend' element={<Friend friend={props.state.friend}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
