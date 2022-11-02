
export type arrayForPostType = {
    id: number
    followed: boolean
    fullName: string
    photoURL: string
    status: string
    location: {
        country: string,
        city: string
    }
}
export type initialStateType = {
    users: Array<arrayForPostType>,

}
type followAT = {
    type: 'FOLLOW'
    userID: string
}
type unFollowAT = {
    type: 'UNFOLLOW'
    userID: string
}
type setUsersAT = {
    type: 'SET-USERS'
    users: []
}
let initialState: initialStateType = {
    users: []
};

export const usersReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}
export const followAC = (userID: string): followAT => {
    return {type: 'FOLLOW', userID}
}
export const unFollowAC = (userID: string): unFollowAT => {
    return {type: 'UNFOLLOW', userID}
}
export const setUsersAC = (users: []): setUsersAT => {
    return {type: 'SET-USERS', users}
}