import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redaxStore";
import {Provider} from "react-redux";

// let rerenderEntireTree = () => {}
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
// rerenderEntireTree()
// store.subscribe(() => {
//     rerenderEntireTree()
// })
// reportWebVitals();

