import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import st from '../Profile.module.css';


const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const changeUserStatus = () => {
        setEditMode(!editMode);
        props.updateUserStatus(status);
    }

    useEffect(()=>{setStatus(props.status)}, [props.status])

    return (
        <div>
            {editMode
                ? <input
                    autoFocus={true}
                    onChange={(e) => setStatus(e.currentTarget.value)}
                    onBlur={changeUserStatus}
                    defaultValue={props.status} />
                : <span
                    onDoubleClick={() => setEditMode(!editMode)}>
                    {props.status || 'No status'}
                </span>}
        </div>
    )
}

export default ProfileStatus;