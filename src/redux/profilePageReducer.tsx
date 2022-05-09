const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profilePageReducer = (state: any, action: any) => {

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
export const addPostAC = () => ({type: ADD_POST})
export const onPostChangeAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})