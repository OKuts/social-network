import React from 'react';
import userPhoto from '../../../../assets/img/logo.png';
import st from '../Profile.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    return (
        <div>
            <img
                className={st.img_icon}
                src={props.profilePage.currentUser.photos.small || userPhoto}
                alt="user" />
            {props.profilePage.currentUser.fullName}
            <ProfileStatus
                status={props.profilePage.currentStatus}
                updateUserStatus = {props.updateUserStatus}

                />
        </div>
    )
}

export default ProfileInfo;