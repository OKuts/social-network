import React from 'react';
import Dialogs from './Dialogs';
import {
    addMessageActionCreator,
    inputMessageActionCreator
} from '../../../redux/dialogReducer';

function DialogsCont(props) {
    const dialogPage = props.store.getState().dialogPage;

    const sendMessage = () => props.store.dispatch(addMessageActionCreator());

    const onChangeArea = (text) => props.store.dispatch(
        inputMessageActionCreator(text));

    return (
        <Dialogs
            dialogPage={dialogPage}
            onChangeArea={onChangeArea}
            sendMessage={sendMessage}

        />
    );
}

export default DialogsCont;