import {combineReducers, createStore} from "redux";
import { messagePageReducer } from "./messagePageReducer";
import { profilePageReducer } from "./profilePageReducer";
import { sideBarReduser } from "./sideBarReduser";

let rootReducer = combineReducers({
    profilePage:profilePageReducer,
    messagePage:messagePageReducer,
    sideBar:sideBarReduser,
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export default store