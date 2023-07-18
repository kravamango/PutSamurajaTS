import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProp = (dispatch:any) => {
    return {
        follow: (userID:any) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID:any) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users:any) => {
            dispatch(setUsersAC(users))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(Users)
