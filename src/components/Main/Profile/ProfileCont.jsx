import React from 'react';
import Profile from './Profile';

import {
    addPostActionCreator,
    inputPostActionCreator
} from '../../../redux/profileReducer';

const ProfileCont = (props) => {

    const profilePage = props.store.getState().profilePage;

    const addPost = () => props.store.dispatch(addPostActionCreator());
    const onChangeTextArea = (text) =>
        props.store.dispatch(inputPostActionCreator(text));

    return (
        <>
            <Profile
                onChangeTextArea={onChangeTextArea}
                addPost={addPost}
                profilePage={profilePage}
            />
        </>
    )
}

export default ProfileCont;