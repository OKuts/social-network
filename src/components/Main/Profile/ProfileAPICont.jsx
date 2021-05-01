import React, { useEffect } from 'react';
import Profile from './Profile';

const ProfileAPICont = (props) => {
    let userId = props.match.params.userId;
    // userId = userId && 16594;

    useEffect(() => {
        props.getOneUser(userId);
        props.getUserStatus(userId);
    }, [])

    return (
        <>
            <Profile {...props} />
        </>
    )
}

export default ProfileAPICont;