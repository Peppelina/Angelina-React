import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe, updateNewPostText,addPost} from "./redux/state";


/*addPost()*/
let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         updateNewPostText={updateNewPostText}/>,
                        document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);