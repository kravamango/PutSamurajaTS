import React from 'react';
import d from './Dialogs.module.css'
import {DialogsItem} from "./DIalogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {dialogsDataType, messagesDataType} from "../../App";

type PropsType = {
    messagesData:Array<messagesDataType>
    dialogsData:Array<dialogsDataType>
}


const Dialogs = (props:PropsType) => {
    return <div className={d.Dialogs}>
        <div className={d.dialogsItem}>
            {props.dialogsData.map((d) => {
                return <React.Fragment key={d.id}><DialogsItem name={d.name}/></React.Fragment>
            })}
        </div>
            <div className={d.messageItem}>
                {props.messagesData.map((m) => {
                    return <React.Fragment key={m.id}><Message message={m.message}/></React.Fragment>
                })}
            </div>
    </div>
}
export default Dialogs;
