import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className ='app-wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
