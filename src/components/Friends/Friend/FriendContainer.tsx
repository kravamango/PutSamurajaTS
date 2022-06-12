import {addFriendAC, friendType, onTextNameChangeAC} from "../../../redux/sideBarReduser";
import Friend from "./Friend";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redaxStore";
import {Dispatch} from "redux";


// export type friendPropsType = {
//     friend: Array<friendType>
//     dispatch: (action: any) => void
//     newFriendName: string
// }
//
// const FriendContainer = (props: friendPropsType) => {
//     let state = props.store.getState()
//
//
//     const addFriend = () => {
//         props.store.dispatch(addFriendAC())
//     }
//     const onTextNameChange = (text1:string) => {
//             props.store.dispatch(onTextNameChangeAC(text1))
//         }
//
//
//     return (
//        <Friend
//            friend={state.sideBar.friend}
//            updateOnTextNameChange={onTextNameChange}
//            addFriend={addFriend}
//            newFriendName={state.sideBar.newFriendName}/>
//     );
// };
//
// export default FriendContainer;


type MapStateToPropsType = {
    friend:Array<friendType>,
    newFriendName:string
}
type MapDispatchToPropsType = {
    addFriend:()=>void,
    updateOnTextNameChange:(text1:string)=>void
}
let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        friend: state.sideBar.friend,
        newFriendName: state.sideBar.newFriendName
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    return {
        addFriend: () => {
            dispatch(addFriendAC())
        },
        updateOnTextNameChange: (text1:string) => {
            dispatch(onTextNameChangeAC(text1))
        }
    }
}

const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(Friend);

export default FriendContainer