import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         dispatch={store.dispatch.bind(store)} /*bind() - ф-я чтоб функция взялась из store*//>,
                        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);