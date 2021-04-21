import React, { useEffect } from 'react';
import User from './User/User';
import Preloader from './Preloader/Preloader';
import { usersAPI } from '../../../api/api';

const UsersAPICont = (props) => {

    const { currentPage, pageSize, isRotation } = props.usersPage;
    const getServer = (n) => {
        props.changeRotation(true);
        props.toggleBtnActive();
        const path = `users?page=${n || currentPage}&count=${pageSize}`;
        usersAPI.usersServerData(path, 'get')
            .then(res => {
                props.setUsers(res.items);
                if (!n) props.setTotalCount(res.totalCount);
                props.changeRotation(false);
                props.toggleBtnActive();
            });
    }

    useEffect(() => {
        getServer();
    }, [])

    const onChangePage = (i) => {
        props.changePage(i);
        getServer(i);
    }
    return (
        <>
            <Preloader isRotation={isRotation} />
            <User
                usersPage={props.usersPage}
                onChangePage={onChangePage}
                onFollow={props.onFollow}
                offFollow={props.offFollow}
                toggleBtnActive={props.toggleBtnActive}
            />
        </>
    )
}

export default UsersAPICont;