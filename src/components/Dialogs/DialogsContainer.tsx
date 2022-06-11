import React from 'react';
import {addMessageAC, onMessageChangeAC} from "../../redux/messagePageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type PropsType = {
    store: any
}

const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    };
    const onMessageChange = (textMessage: string) => {
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

// let mapStateToProps = (state: any) => {
//     return {
//         messagesData: state.messagesData
//     }
// }
// let mapDispatchToProps = (dispatch: (action: any) => void) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageAC())
//         },
//         updateOnMessageChangeText: (textMessage: string) => {
//             dispatch(onMessageChangeAC(textMessage))
//         }
//     }
// }
//
// const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
//
// export default SuperDialogsContainer

export default DialogsContainer;

