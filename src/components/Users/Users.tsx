import React from 'react';
import s from './Users.module.css'
import {usersType} from "../../redux/usersReducer";
import axios from "axios";
import userPhoto from "../../assets/avatar.png"


export type usersPropsType = {
    users: Array<usersType>
    setUsers:any
    unFollow:(id:number)=>void
    follow:(id:number)=>void
}

const Users = (props:usersPropsType) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

        props.setUsers(response.data.items)
        })
        /*props.setUsers([

            {
                id: 1,
                followed: false,
                fullName: 'Vitalik',
                photoURL: 'https://cdni-vm.servicecdn.ru/2021.08/original/720_61262d0082682c6734bc36ba.jpg',
                status: 'how ara',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2,
                followed: false,
                fullName: 'Dima',
                photoURL: 'https://cdni-vm.servicecdn.ru/2021.08/original/720_61262d0082682c6734bc36ba.jpg',
                status: 'how ara',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 3,
                followed: true,
                fullName: 'Siergey',
                photoURL: 'https://cdni-vm.servicecdn.ru/2021.08/original/720_61262d0082682c6734bc36ba.jpg',
                status: 'how ara',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 4,
                followed: false,
                fullName: 'Vova',
                photoURL: 'https://cdni-vm.servicecdn.ru/2021.08/original/720_61262d0082682c6734bc36ba.jpg',
                status: 'how ara',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 5,
                followed: false,
                fullName: 'Tema',
                photoURL: 'https://cdni-vm.servicecdn.ru/2021.08/original/720_61262d0082682c6734bc36ba.jpg',
                status: 'how ara',
                location: {country: 'Belarus', city: 'Minsk'}
            },

        ])*/
    }


    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.large != null ? u.photos.large : userPhoto } className={s.photo}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>unFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                        <div>{u.photos.small}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;
