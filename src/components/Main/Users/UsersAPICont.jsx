import React, { useEffect } from 'react';
import User from './User/User';
import Preloader from './Preloader/Preloader';

const UsersAPICont = (props) => {

    const { currentPage, pageSize, isRotation } = props.usersPage;

    useEffect(() => {
        props.getUsersData(currentPage, pageSize);
    }, [])

    const onChangePage = (i) => {
        props.changePage(i);
        props.getUsersData(currentPage, pageSize,i);
    }
    return (
        <>
            <Preloader isRotation={isRotation} />
            <User
                usersPage={props.usersPage}
                onChangePage={onChangePage}
                setFollow={props.setFollow}
                setUnFollow={props.setUnFollow}
                toggleBtnActive={props.toggleBtnActive}
            />
        </>
    )
}

export default UsersAPICont;