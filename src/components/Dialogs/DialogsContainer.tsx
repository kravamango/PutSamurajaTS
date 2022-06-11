import React, {useRef} from 'react';
import d from './Dialogs.module.css'
import {DialogsItem} from "./DIalogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsDataType, messagesDataType} from "../../App";
import {addMessageAC, onMessageChangeAC} from "../../redux/messagePageReducer";

type PropsType = {
    messagesData: Array<messagesDataType>
    dialogsData: Array<dialogsDataType>
    newMessageText:string
    dispatch:(action:any)=>void
}

const Dialogs = (props: PropsType) => {

    const dialogsDataElements = props.dialogsData.map((d) => <React.Fragment key={d.id}><img alt='' src={d.img}/><DialogsItem name={d.name}/></React.Fragment>)
    const messageDataElement = props.messagesData.map((m) => <React.Fragment key={m.id}><Message message={m.message}/></React.Fragment>)
    const newMessageElement = useRef<HTMLTextAreaElement>(null);

    const addMessage = () => {
        props.dispatch(addMessageAC())
    };
    const onMessageChange = () => {
        if (newMessageElement && newMessageElement.current) {
            let textMessage = newMessageElement.current.value
            props.dispatch(onMessageChangeAC(textMessage))
        }
    }

    return (
        <div className={d.Dialogs}>
            <div className={d.dialogsItem}>
                {dialogsDataElements}
            </div>
            <div className={d.messageItem}>
                {messageDataElement}
            </div>
            <textarea onChange={onMessageChange}
                      ref={newMessageElement}
                      value={props.newMessageText}
                      placeholder={'New message'}/>
            <div>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
}
export default Dialogs;

