const ADD_FRIEND = 'ADD-FRIEND'
const UPDATE_NEW_ADD_FRIEND = 'UPDATE-NEW-ADD-FRIEND'

export type friendType = {
    id: number
    name: string
    img: string
}
export type  initialStateType = {
    friend:Array<friendType>,
    newFriendName:string
}
let initialState:initialStateType = {
    friend: [
        {
            id: 1,
            name: 'Vika Akilova',
            img: 'https://sun9-82.userapi.com/impg/sgHC6a_PPsks6gp90utJXLeuAJRA7_z3hJgfTA/y4uKXP1dHwA.jpg?size=640x800&quality=96&sign=cdaad2e6920fe9c5fe667f8706d1dc28&type=album'
        },
        {
            id: 2,
            name: 'Inna Karmazina',
            img: 'https://sun9-1.userapi.com/impg/fwLvrHF7gHJwGSz_wCotkloGzvKS9IUIPPRr0w/QmtjRalQBFc.jpg?size=768x960&quality=96&sign=48fc3f0a643390844f6a09f9da7b97f4&type=album'
        },
        {
            id: 3,
            name: 'Angelina Vladychenko',
            img: 'https://sun9-27.userapi.com/impg/7jpuP39ZHXP7bu9jwJKSTkg_wWAnVLTd7xL-Gw/8m2lv_uF3LE.jpg?size=1023x1279&quality=96&sign=db7d660fc848d02f749289e033b7d076&type=album'
        },
    ],
    newFriendName: '',
};

export const sideBarReduser = (state = initialState, action: AddFriendType | OnTextNameChangeType):initialStateType => {

    switch (action.type) {
        case ADD_FRIEND: {
            let newFriend = {
                id: 4,
                name: state.newFriendName,
                img: 'https://www.litmir.me/data/Author/96000/96527/%D0%A4%D0%BE%D1%82%D0%BE_%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87_2fa2e.jpg'
            }

            let stateCopy = {...state}
            stateCopy.friend = [...state.friend]
            stateCopy.friend.push(newFriend)
            stateCopy.newFriendName = ""
            return stateCopy
            // state.friend.push(newFriend);
            // state.newFriendName = ""
            // return state
        }
        case UPDATE_NEW_ADD_FRIEND: {
            let stateCopy = {...state}
            stateCopy.newFriendName = state.newFriendName
            return stateCopy
            // state.newFriendName = action.newFriendName
            // return state
        }
        default:
            return state
    }
}
export const addFriendAC = () => ({type: ADD_FRIEND} as const)
export type AddFriendType = ReturnType<typeof addFriendAC>

export const onTextNameChangeAC = (textName: string) => ({type: UPDATE_NEW_ADD_FRIEND, newFriendName: textName} as const)
export type OnTextNameChangeType = ReturnType<typeof onTextNameChangeAC>