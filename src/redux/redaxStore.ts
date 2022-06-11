import {combineReducers, createStore} from "redux";
import { messagePageReducer } from "./messagePageReducer";
import { profilePageReducer } from "./profilePageReducer";
import { sideBarReduser } from "./sideBarReduser";

let reducers = combineReducers({
    profilePage:profilePageReducer,
    messagePage:messagePageReducer,
    sideBar:sideBarReduser,
})

const store = createStore(reducers);

export default store