const ADD_FRIEND = 'ADD-FRIEND'
const UPDATE_NEW_ADD_FRIEND = 'UPDATE-NEW-ADD-FRIEND'

export const sideBarReduser = (state: any, action: any) => {

    switch (action.type) {
        case ADD_FRIEND:
            let newFriend = {
                id: 4,
                name: state.newFriendName,
                img: 'https://www.litmir.me/data/Author/96000/96527/%D0%A4%D0%BE%D1%82%D0%BE_%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87_2fa2e.jpg'
            }
            state.friend.push(newFriend);
            state.newFriendName = ""
            return state
        case UPDATE_NEW_ADD_FRIEND:
            state.newFriendName = action.newFriendName
            return state
        default:
            return state
    }
}
export const addFriendAC = () => ({type: ADD_FRIEND})
export const onTextNameChangeAC = (textName: string) => ({type: UPDATE_NEW_ADD_FRIEND, newFriendName: textName})