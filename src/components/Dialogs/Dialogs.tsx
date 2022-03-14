import React from 'react';
import d from './Dialogs.module.css'
import {DialogsItem} from "./DIalogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsDataType, messagesDataType} from "../../App";


type PropsType = {
    messagesData: Array<messagesDataType>
    dialogsData: Array<dialogsDataType>
}


const Dialogs = (props: PropsType) => {

    let dialogsDataElements = props.dialogsData.map((d) => <React.Fragment key={d.id}><img alt='' src={d.img}/><DialogsItem name={d.name}/></React.Fragment>)
    let messageDataElement = props.messagesData.map((m) => <React.Fragment key={m.id}><Message message={m.message}/></React.Fragment>)

    return (
        <div className={d.Dialogs}>
            <div className={d.dialogsItem}>
                {dialogsDataElements}
            </div>
            <div className={d.messageItem}>
                {messageDataElement}
            </div>
        </div>
    )
}
export default Dialogs;

