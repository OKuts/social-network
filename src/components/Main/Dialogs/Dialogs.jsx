import React from 'react';
import st from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


function Dialogs(props) {
    // if (!props.isAuth) return <Redirect to={'/login'} />;

    const { dialogs, messages, areaValue } = props.dialogPage;
    const textArea = React.createRef();

    const dialogElements = dialogs.map(i =>
        <Dialog key={i.id} name={i.name} id={i.id} />)

    const messageElements = messages.map(i =>
        <Message key={i.id} message={i.message} />)

    return (
        <div>
            <h2 className={st.page_name}>Dialogs</h2>
            <hr />
            <div className={st.page}>
                <div className="st.dialogs">
                    {dialogElements}
                </div>
                <div className="st.messages">
                    {messageElements}
                    <textarea
                        onChange={() => props.onChangeArea(textArea.current.value)}
                        ref={textArea}
                        value={areaValue}
                    />
                    <button onClick={() => props.sendMessage()}>Send</button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;