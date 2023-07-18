
export type usersType = {
    id: number
    followed: boolean
    name: string
    photos:{
        small:string
        large:string
    }
    status: string
    location: {
        country: string,
        city: string
    }
}
export type initialStateType = {
    users: Array<usersType>,

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