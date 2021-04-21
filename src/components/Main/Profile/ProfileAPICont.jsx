import * as axios from 'axios';
import React, { useEffect } from 'react';
import Profile from './Profile';
import { usersAPI } from '../../../api/api';

const ProfileAPICont = (props) => {
    const userId = props.match.params.userId;
    useEffect(() => {
        usersAPI.usersServerData('profile/' + userId, 'get')
            .then(data => {
                props.setUserProfile(data);
            })
    }, [])

    return (
        <>
            <Profile {...props} />
        </>
    )
}

export default ProfileAPICont;