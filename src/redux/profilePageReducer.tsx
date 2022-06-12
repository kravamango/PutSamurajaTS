const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type arrayForPostType = {
    id: number
    name: string
    like: number
}
export type initialStateType = {
    arrayForPost:Array<arrayForPostType>,
    newPostText:string
}
let initialState:initialStateType = {
        arrayForPost: [
            {id: 1, name: 'Vitalik', like: 10},
            {id: 2, name: 'Serega', like: 1},
            {id: 3, name: 'Dima', like: 1000},
            {id: 4, name: 'Victor', like: 500},
        ],
        newPostText: '',
    };

export const profilePageReducer = (state = initialState, action: AddPostType | OnPostChangeType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                name: state.newPostText,
                like: 0,
            };
            state.arrayForPost.push(newPost);
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const addPostAC = () => ({type: ADD_POST} as const)
export type AddPostType = ReturnType<typeof addPostAC>
export const onPostChangeAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export type OnPostChangeType = ReturnType<typeof onPostChangeAC>