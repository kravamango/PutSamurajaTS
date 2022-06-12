import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendContainer from "./components/Friends/Friend/FriendContainer";


// export type PropsType = {
//     state: {
//         profilePage: {
//             arrayForPost: Array<arrayForPostType>
//             newPostText: string
//         }
//         messagePage: {
//             messagesData: Array<messagesDataType>
//             dialogsData: Array<dialogsDataType>
//             newMessageText: string
//         }
//         sideBar: {
//             friend: Array<friendType>
//             newFriendName: string
//         }
//     }
//     dispatch: (action: any) => void
//     store:any
// }
// export type dialogsDataType = {
//     id: number
//     name: string
//     img: string
// }
// export type messagesDataType = {
//     id: number
//     message: string
// }
const App = () => {    return (
        <BrowserRouter>
            <div className='app-wraper'>
                <Header/>
                <Navbar/>
                <div className='app-wraper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/message' element={<DialogsContainer />}/>

                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        <Route path='/Friend' element={<FriendContainer />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
