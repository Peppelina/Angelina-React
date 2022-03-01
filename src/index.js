import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";


    ReactDOM.render(
        <Provider store={store}>
            <App store={store}/>
        </Provider>,
        document.getElementById('root'));


// rerenderEntireTree(store);
//
// store.subscribe(() => {
//     rerenderEntireTree(store);
// })