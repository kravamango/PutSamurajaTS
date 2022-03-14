import React from 'react';
import {friendType} from "../../../App"
import f from "./Friend.module.css"
export type friendPropsType = {
    friend:Array<friendType>
}

const Friend = (props:friendPropsType) => {
    return (
        <div>
            {props.friend.map((r) => {
                return (
                    <div className={f.item}>
                        <img alt='' src={r.img}/>
                        <div className={f.itemName}>{r.name}</div>
                    </div>

                )
            })}

        </div>
    );
};

export default Friend;