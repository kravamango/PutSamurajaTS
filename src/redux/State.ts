import {profilePageReducer} from "./profilePageReducer";
import {messagePageReducer} from "./messagePageReducer";
import {sideBarReduser} from "./sideBarReduser";

// const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
// const ADD_MESSAGE = 'ADD-MESSAGE'
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            arrayForPost: [
                {id: 1, name: 'Vitalik', like: 10},
                {id: 2, name: 'Serega', like: 1},
                {id: 3, name: 'Dima', like: 1000},
                {id: 4, name: 'Victor', like: 500},
            ],
            newPostText: '',
        },
        messagePage: {
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
        },
        sideBar: {
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
        },
    },

    _callSubscriber() {
        console.log('чет происходит')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action: any) {
        this._state.profilePage = profilePageReducer(this._state.profilePage,action)
        this._state.messagePage = messagePageReducer(this._state.messagePage,action)
        this._state.sideBar = sideBarReduser(this._state.sideBar,action)
        this._callSubscriber()

        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         name: this._state.profilePage.newPostText, // action.postMessage
        //         like: 0,
        //     };
        //     this._state.profilePage.arrayForPost.push(newPost);
        //     this._state.profilePage.newPostText = ""
        //     this._callSubscriber();
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber()
        // }
        //
        // if (action.type === ADD_MESSAGE) {
        //     let newMessage = {
        //         id: 5,
        //         message: this._state.messagePage.newMessageText,
        //     }
        //     let newProfile = {
        //         id: 5,
        //         name: 'Неизвестный',
        //         img: 'https://sun9-14.userapi.com/sun9-38/s/v1/if1/pKx4hlE7AUJ4eiAffpDY7vxVcYkSFdHg5BNYWcgliSGVjIerIS2YDnTygIS8fxVFYcGcznOY.jpg?size=200x200&quality=96&crop=80,0,455,455&ava=1',
        //     }
        //     this._state.messagePage.messagesData.push(newMessage);
        //     this._state.messagePage.dialogsData.push(newProfile);
        //     this._state.messagePage.newMessageText = ""
        //     this._callSubscriber();
        // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //     this._state.messagePage.newMessageText = action.newMessageText
        //     this._callSubscriber()
        // }
    },
}

// export const addMessageAC = () => ({type:ADD_MESSAGE})
// export const onMessageChangeAC = (textMessage:string) => ({type:UPDATE_NEW_MESSAGE_TEXT,newMessageText:textMessage})
// export const addPostAC = () => ({type: ADD_POST})
// export const onPostChangeAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;
