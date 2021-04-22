import React, { useEffect } from 'react';
import Profile from './Profile';

const ProfileAPICont = (props) => {

    const userId = props.match.params.userId;

    useEffect(() => props.getOneUser(userId), [])

    return (
        <>
            <Profile {...props} />
        </>
    )
}

export default ProfileAPICont;