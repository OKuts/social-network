import React from 'react';
import st from './Header.module.css';
import kuts from '../../assets/img/kuts.svg';


function Header(props) {
  return (
    <header className={st.app__header}>
      <img src={kuts} alt="Ol Kuts" />
    </header>
  );
}

export default Header;