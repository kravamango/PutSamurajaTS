import React, {useRef} from 'react';
import f from "./Friend.module.css"
import {friendType} from "../../../redux/sideBarReduser";

export type friendPropsType = {
    friend: Array<friendType>
    newFriendName: string
    updateOnTextNameChange:(text1:string) =>void
    addFriend:()=>void
}

const Friend = (props: friendPropsType) => {

    const newFriendElement = useRef<HTMLTextAreaElement>(null);

    const addFriend = () => {
        props.addFriend()
    }
    const onTextNameChange = () => {
        let text1 = newFriendElement.current?.value
        if (text1)
            props.updateOnTextNameChange(text1)

    }

    return (
        <div>
            {props.friend.map((r) => {
                return (
                    <div className={f.item} key={r.id}>
                        <img alt='' src={r.img}/>
                        <div className={f.itemName}>{r.name}</div>
                    </div>
                )
            })}
            <textarea onChange={onTextNameChange}
                      ref={newFriendElement}
                      value={props.newFriendName}/>
            <button onClick={addFriend}>Add Friend</button>
        </div>
    );
};

export default Friend;