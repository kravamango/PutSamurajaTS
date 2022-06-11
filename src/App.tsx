import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friend from "./components/Friends/Friend/Friend";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



export type PropsType = {
    state: {
        profilePage: {
            arrayForPost: Array<arrayForPostType>
            newPostText: string
        }
        messagePage: {
            messagesData: Array<messagesDataType>
            dialogsData: Array<dialogsDataType>
            newMessageText: string
        }
        sideBar: {
            friend: Array<friendType>
            newFriendName: string
        }
    }
    dispatch: (action: any) => void
    store:any
}
export type dialogsDataType = {
    id: number
    name: string
    img: string


}
export type messagesDataType = {
    id: number
    message: string
}
export type arrayForPostType = {
    id: number
    name: string
    like: number
}
export type friendType = {
    id: number
    name: string
    img: string
}


const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wraper'>
                <Header/>
                <Navbar/>
                <div className='app-wraper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile store={props.store}/>}/>
                        <Route path='/message' element={<DialogsContainer store={props.store}
                                                                 /*dispatch={props.dispatch}
                                                                 messagesData={props.state.messagePage.messagesData}
                                                                 dialogsData={props.state.messagePage.dialogsData}
                                                                 newMessageText={props.state.messagePage.newMessageText}*//>}/>

                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        <Route path='/Friend' element={<Friend friend={props.state.sideBar.friend}
                                                               dispatch={props.dispatch}
                                                               newFriendName={props.state.sideBar.newFriendName}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
