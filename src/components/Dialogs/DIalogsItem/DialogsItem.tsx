import React from 'react';
import d from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

type PropsTypeDialogs = {
    name: string
    id?: number
}

export const DialogsItem = (props: PropsTypeDialogs) => {
    let path = '/dialogs/' + props.id
    return (
        <NavLink to={path} className={d.item}>{props.name}</NavLink>
    )
}