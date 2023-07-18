import React, {useRef, useState} from 'react';
import d from './Dialogs.module.css'
import {DialogsItem} from "./DIalogsItem/DialogsItem";
import {Message} from "./Message/Message";

import {DialogsPropsType} from "./DialogsContainer";


// type PropsType = {
//     messagesData: Array<messagesDataType>
//     dialogsData: Array<dialogsDataType>
//     newMessageText:string
//     addMessage:()=>void
//     updateOnMessageChangeText:(textMessage:string)=>void
// }

const Dialogs = (props: DialogsPropsType) => {
    const dialogsDataElements = props.dialogsData.map((d) => <React.Fragment key={d.id}><img alt='' src={d.img}/><DialogsItem name={d.name}/></React.Fragment>)
    const messageDataElement = props.messagesData.map((m) => <React.Fragment key={m.id}><Message message={m.message}/></React.Fragment>)
    const newMessageElement = useRef<HTMLTextAreaElement>(null);


    const onKeyDown = (e: any) => {
        e.key === 'Enter' && e.shiftKey && addMessage()
    }

    const addMessage = () => {
        props.addMessage()
    };
    const onMessageChange = () => {
        let textMessage = newMessageElement.current?.value
        if(textMessage)
            props.updateOnMessageChangeText(textMessage)

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

