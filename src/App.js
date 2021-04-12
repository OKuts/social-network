import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import DialogsCont from './components/Main/Dialogs/DialogsCont';
import ProfileCont from './components/Main/Profile/ProfileCont';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Nav />
        <div className="content">
          <Route path='/profile'>
            <ProfileCont />
          </Route>
          <Route path='/dialogs'>
            <DialogsCont />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
