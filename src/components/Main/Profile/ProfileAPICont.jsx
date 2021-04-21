import * as axios from 'axios';
import React, { useEffect } from 'react';
import Profile from './Profile';
import { usersAPI } from '../../../api/api';

const ProfileAPICont = (props) => {
    const userId = props.match.params.userId;
    useEffect(() => {
        usersAPI.getUsers('profile/' + userId)
            .then(res => {
                props.setUserProfile(res);
            })
    }, [])

    return (
        <>
            <Profile {...props} />
        </>
    )
}

export default ProfileAPICont;