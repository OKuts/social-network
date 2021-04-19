import * as axios from 'axios';
import React, { useEffect } from 'react';
import Profile from './Profile';

const ProfileAPICont = (props) => {
    const param = props.match.params.userId;
    useEffect(() => {
        console.log(props);
        let path = `https://social-network.samuraijs.com/api/1.0/profile/${param}`;
        axios.get(path)
            .then(res => {
                props.setUserProfile(res.data);
            })
    }, [])

    return (
        <>
            <Profile {...props} />
        </>
    )
}

export default ProfileAPICont;