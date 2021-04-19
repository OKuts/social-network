import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './Nav.module.css';


function Nav() {
    return (
        <nav className={st.app__nav}>
            <div className={st.item}>
                <NavLink
                    exact
                    activeClassName={st.active}
                    to="/profile/">Profile
                </NavLink>
            </div>
            <div className={st.item}>
                <NavLink
                    activeClassName={st.active}
                    to="/dialogs">Dialogs
                </NavLink>
            </div>
            <div className={st.item}>
                <NavLink
                    activeClassName={st.active}
                    to="/users">Users
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;