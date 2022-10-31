const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type messagesDataType = {
    id:number,
    message:string,
}
export type dialogsDataType = {
    id:number,
    name:string,
    img:string,
}
export type initialStateType = {
    newMessageText:string,
    messagesData:Array<messagesDataType>
    dialogsData:Array<dialogsDataType>
}

let initialState:initialStateType = {
    newMessageText: '',
        messagesData: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Можешь говорить?'},
        {id: 3, message: 'Как дела?'},
        {id: 4, message: 'Чем занят?'},
        {id: 5, message: 'Хорошо'},
    ],
        dialogsData: [
        {
            id: 1,
            name: 'Саня',
            img: 'https://sun9-82.userapi.com/impg/sgHC6a_PPsks6gp90utJXLeuAJRA7_z3hJgfTA/y4uKXP1dHwA.jpg?size=640x800&quality=96&sign=cdaad2e6920fe9c5fe667f8706d1dc28&type=album'
        },
        {
            id: 2,
            name: 'Виталя',
            img: 'https://sun9-59.userapi.com/impg/XEGktbzULsM6w7JyK2KE2rrQ6b3aSnAMJ82uZw/7iAvNuWVAcA.jpg?size=640x960&quality=96&sign=e9dfdf2ef8c09b0a87c764f292017cae&type=album'
        },
        {
            id: 3,
            name: 'Витес',
            img: 'https://sun9-66.userapi.com/impg/c858128/v858128749/1eaa98/QT0vYLTynFY.jpg?size=600x749&quality=96&sign=b79bbab25160fb28f7d650e4ad607142&type=album'
        },
        {
            id: 4,
            name: 'Семен',
            img: 'https://sun9-43.userapi.com/impg/cFzkR4OgbbsPUgXzc4cZ377DPaPXF9f6d8kyYw/3ya64VKMLMw.jpg?size=736x736&quality=96&sign=4529ea40f9a2fe4e681c412372643010&type=album'
        },
        {
            id: 5,
            name: 'Вася',
            img: 'https://sun9-4.userapi.com/impg/3BPGM9mtGKyzC_YAMH-JzdhJn6ZPG1Sr3Digpg/aUv_YJspKok.jpg?size=1200x679&quality=96&sign=628d1ee2c3d0947240561edc3e7d6565&type=album'
        },
    ],
};

type messageActionsTypes = AddMessageType | OnMessageChangeType

export const messagePageReducer = (state = initialState, action: messageActionsTypes):initialStateType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            let newProfile = {
                id: 5,
                name: 'Неизвестный',
                img: 'https://sun9-14.userapi.com/sun9-38/s/v1/if1/pKx4hlE7AUJ4eiAffpDY7vxVcYkSFdHg5BNYWcgliSGVjIerIS2YDnTygIS8fxVFYcGcznOY.jpg?size=200x200&quality=96&crop=80,0,455,455&ava=1',
            }

            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.dialogsData = [...state.dialogsData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.dialogsData.push(newProfile)
            stateCopy.newMessageText = ''
            return stateCopy

            // state.messagesData.push(newMessage);
            // state.dialogsData.push(newProfile);
            // state.newMessageText = ""
            // return state
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessageText
            return stateCopy

            // state.newMessageText = action.newMessageText
            // return state
        }
        default:
            return state

    }
}
export const addMessageAC = () => ({type: ADD_MESSAGE}as const)
export type AddMessageType = ReturnType<typeof addMessageAC>
export const onMessageChangeAC = (textMessage: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: textMessage}as const)
export type OnMessageChangeType = ReturnType<typeof onMessageChangeAC>