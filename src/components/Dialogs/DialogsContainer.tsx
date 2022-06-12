import {addMessageAC, dialogsDataType, messagesDataType, onMessageChangeAC} from "../../redux/messagePageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redaxStore";

// type PropsType = {
//     store: any
// }
/*const DialogsContainer = (props: PropsType) => {

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
}*/
// export default DialogsContainer;

type MapStateToPropsType = {
    messagesData:Array<messagesDataType>
    dialogsData:Array<dialogsDataType>
    newMessageText:string
}
type MapDispatchToPropsType = {
    addMessage:()=>void,
    updateOnMessageChangeText: (textMessage: string) =>void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        messagesData: state.messagePage.messagesData,
        dialogsData: state.messagePage.dialogsData,
        newMessageText: state.messagePage.newMessageText
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateOnMessageChangeText: (textMessage: string) => {
            dispatch(onMessageChangeAC(textMessage))
        }
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer


