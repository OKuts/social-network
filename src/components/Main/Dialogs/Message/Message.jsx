import React from 'react';
import st from './Message.module.css';

const Message = (props) => {
    const { message } = props;
    return (
        <div className={st.message}>
            {message}
        </div>
    )
}

export default Message;
