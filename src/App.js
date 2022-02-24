import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import store from "./redux/state";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state ={props.state.navbarPage}/>
                <div className='app-wrapper-content'>
                    <Routes>

                        <Route path='/profile' element={<Profile profilePage ={props.state.profilePage}
                                                                 dispatch ={props.dispatch}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs store={props.store}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
