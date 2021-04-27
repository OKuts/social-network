import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HeaderCont from './components/Header/HeaderCont';
import Nav from './components/Nav/Nav';
import DialogsCont from './components/Main/Dialogs/DialogsCont';
import ProfileCont from './components/Main/Profile/ProfileCont';
import UsersCont from './components/Main/Users/UsersCont';
import Login from './components/Login/login';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <HeaderCont />
        <Nav />
        <div className="content">
          <Route path='/profile/:userId'>
            <ProfileCont />
          </Route>
          <Route path='/profile'>
            <ProfileCont />
          </Route>
          <Route path='/dialogs'>
            <DialogsCont />
          </Route>
          <Route path='/users'>
            <UsersCont />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
