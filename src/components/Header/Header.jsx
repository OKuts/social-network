import React from 'react';
import st from './Header.module.css';
import kuts from '../../assets/img/kuts.svg';
import { NavLink } from 'react-router-dom';


function Header(props) {
  return (
    <header className={st.app__header}>
      <img src={kuts} alt="Ol Kuts" />
      <div className={st.login_block}>
        {props.authPage.isUser ? props.authPage.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;