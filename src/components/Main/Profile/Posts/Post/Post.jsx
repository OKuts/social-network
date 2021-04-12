import React from 'react';
import st from './Post.module.css';

function Post(props) {
    return (
        <>
            <div className={st.post}>
                <img src="./2764.png" alt="" />
                <div>{props.post}</div>
            </div>
            <hr />
        </>
    );
}

export default Post;