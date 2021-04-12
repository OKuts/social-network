import st from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    const { name, id } = props;
    const path = `/dialogs/${id}`;
    return (
        <div className={st.dialog}>
            <NavLink to={path}
                activeClassName={st.active}>
                {name}
            </NavLink>
        </div>
    )
}

export default Dialog;