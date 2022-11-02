import {combineReducers, createStore} from "redux";
import { messagePageReducer } from "./messagePageReducer";
import { profilePageReducer } from "./profilePageReducer";
import { sideBarReduser } from "./sideBarReduser";
import {usersReducer} from "./usersReducer";

let rootReducer = combineReducers({
    profilePage:profilePageReducer,
    messagePage:messagePageReducer,
    sideBar:sideBarReduser,
    usersPage:usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export default store

//@ts-ignore
window.store = store;