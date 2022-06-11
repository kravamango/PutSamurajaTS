import React from 'react';
import {addMessageAC, onMessageChangeAC} from "../../redux/messagePageReducer";
import Dialogs from "./Dialogs";

type PropsType = {
    store:any
}

const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    };
    const onMessageChange = (textMessage:string) => {
            props.store.dispatch(onMessageChangeAC(textMessage))
        }

    return (
       <Dialogs
           messagesData={state.messagePage.messagesData}
           dialogsData={state.messagePage.dialogsData}
           newMessageText={state.messagePage.newMessageText}
           addMessage={addMessage}
           updateOnMessageChangeText={onMessageChange}/>
    )
}

export default DialogsContainer;

