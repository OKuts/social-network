import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import DialogsCont from './components/Main/Dialogs/DialogsCont';
import ProfileCont from './components/Main/Profile/ProfileCont';


import './App.css';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Nav />
        <div className="content">
          <Route path='/profile'
            render={() => <ProfileCont store={props.store} />}
          />
          <Route path='/dialogs'
            render={() => <DialogsCont store={props.store} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
