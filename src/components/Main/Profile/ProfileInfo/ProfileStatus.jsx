import React from 'react';
import { useState } from 'react';
// import st from '../Profile.module.css';


const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const changeUserStatus = () => {
        setEditMode(!editMode);
        props.updateUserStatus(status);
    }

    return (
        <div>
            {editMode
                ? <input
                    autoFocus={true}
                    onChange={(e) => setStatus(e.currentTarget.value)}
                    onBlur={changeUserStatus}
                    defaultValue={status} />
                : <span
                    onDoubleClick={() => setEditMode(!editMode)}>
                    {props.status}
                </span>}
        </div>
    )
}

export default ProfileStatus;