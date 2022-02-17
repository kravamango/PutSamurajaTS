import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

let dialogsData = [
    {id: 1, name: 'Саня'},
    {id: 2, name: 'Виталя'},
    {id: 3, name: 'Витес'},
    {id: 4, name: 'Семен'},
    {id: 5, name: 'Вася'},
]
let messagesData = [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Можешь говорить?'},
    {id: 3, message: 'Как дела?'},
    {id: 4, message: 'Чем занят?'},
    {id: 5, message: 'Хорошо'},
]
let arrayForPost = [
    {id: 1, name: 'Vitalik', like: 10},
    {id: 2, name: 'Serega', like: 1},
    {id: 3, name: 'Dima', like: 1000},
    {id: 4, name: 'Victor', like: 500},
]
let friend = [
    {id: 1, name: 'Vika', img:'https://sun9-82.userapi.com/impg/sgHC6a_PPsks6gp90utJXLeuAJRA7_z3hJgfTA/y4uKXP1dHwA.jpg?size=640x800&quality=96&sign=cdaad2e6920fe9c5fe667f8706d1dc28&type=album'},
    {id: 2, name: 'Inna', img: 'https://sun9-1.userapi.com/impg/fwLvrHF7gHJwGSz_wCotkloGzvKS9IUIPPRr0w/QmtjRalQBFc.jpg?size=768x960&quality=96&sign=48fc3f0a643390844f6a09f9da7b97f4&type=album'},
    {id: 3, name: 'Angelina', img: 'https://sun9-27.userapi.com/impg/7jpuP39ZHXP7bu9jwJKSTkg_wWAnVLTd7xL-Gw/8m2lv_uF3LE.jpg?size=1023x1279&quality=96&sign=db7d660fc848d02f749289e033b7d076&type=album'},
]

const state = {
    dialogsData:dialogsData,
    messagesData:messagesData,
    arrayForPost:arrayForPost,
    friend:friend
}

test('renders learn react link', () => {
    render(<App state={state}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});