import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state ={props.state.navbar}/>
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path='/profile' element={<Profile profilePage ={props.state.profilePage}
                                                                 addPost ={props.addPost}
                                                                 updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.messagesPage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
