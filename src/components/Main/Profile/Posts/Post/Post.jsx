import React from 'react';
import st from './Post.module.css';
import logo from '../../../../../assets/img/logo.png';

function Post(props) {
    return (
        <>
            <div className={st.post}>
                <img src={logo} alt="" />
                <div>{props.post}</div>
            </div>
            <hr />
        </>
    );
}

export default Post;