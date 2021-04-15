import React from 'react';

import spinner from '../../../../assets/img/spinner.svg';
import st from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <>
            {props.isRotation && <img className={st.spinner} src={spinner} alt='spinner' />}
        </>
    )
}

export default Preloader;