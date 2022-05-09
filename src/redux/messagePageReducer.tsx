const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const messagePageReducer = (state: any, action: any) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            let newProfile = {
                id: 5,
                name: 'Неизвестный',
                img: 'https://sun9-14.userapi.com/sun9-38/s/v1/if1/pKx4hlE7AUJ4eiAffpDY7vxVcYkSFdHg5BNYWcgliSGVjIerIS2YDnTygIS8fxVFYcGcznOY.jpg?size=200x200&quality=96&crop=80,0,455,455&ava=1',
            }
            state.messagesData.push(newMessage);
            state.dialogsData.push(newProfile);
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        default:
            return state

    }
}
export const addMessageAC = () => ({type: ADD_MESSAGE})
export const onMessageChangeAC = (textMessage: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: textMessage})
