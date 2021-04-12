import React from 'react';
import st from './Header.module.css';


function Header(props) {
  return (
    <header className={st.app__header}>
      <img src="./kuts.svg" alt="Ol Kuts" />
    </header>
  );
}

export default Header;