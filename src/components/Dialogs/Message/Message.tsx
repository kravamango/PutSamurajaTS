import React from 'react';
import m from './Message.module.css'

type PropsTypeMessage = {
    message:string
    id?: number
}

export const Message = (props: PropsTypeMessage) => {
    return (
        <div>
            <span className={m.count}>5</span>{props.message}

        </div>
    )
}
