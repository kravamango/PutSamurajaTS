import React, {useRef} from 'react';
import {friendType} from "../../../App"
import f from "./Friend.module.css"
import {addFriendAC, onTextNameChangeAC} from "../../../redux/sideBarReduser";

export type friendPropsType = {
    friend: Array<friendType>
    dispatch: (action: any) => void
    newFriendName: string
}

const Friend = (props: friendPropsType) => {

    const newFriendElement = useRef<HTMLTextAreaElement>(null);

    const addFriend = () => {
        props.dispatch(addFriendAC())
    }
    const onTextNameChange = () => {
        if (newFriendElement && newFriendElement.current) {
            let text1 = newFriendElement.current.value
            props.dispatch(onTextNameChangeAC(text1))
        }
    }

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
            <textarea onChange={onTextNameChange}
                      ref={newFriendElement}
                      value={props.newFriendName}/>
            <button onClick={addFriend}>Add Friend</button>
        </div>
    );
};

export default Friend;