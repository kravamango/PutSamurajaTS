import React from 'react';
import f from './Friends.module.css'
import {friendType} from "../../../App";


type friendPropsType = {
    friend:Array<friendType>
}

const Friends = (props:friendPropsType) => {
    return (
        <div>
            <div>{props.friend[0].img}</div>
            <div>{props.friend[1].name}</div>
        </div>
    );
};

export default Friends;