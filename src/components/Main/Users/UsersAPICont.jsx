import * as axios from 'axios';
import React, { useEffect } from 'react';
import User from './User/User';
import Preloader from './Preloader/Preloader';

const UsersAPICont = (props) => {

    const { currentPage, pageSize, isRotation } = props.usersPage;
    const getServer = (n) => {
        props.changeRotation(true);
        let path = `https://social-network.samuraijs.com/api/1.0/users`;
        path += `?page=${n || currentPage}`;
        path += `&count=${pageSize}`;
        axios.get(path).then(res => {
            props.setUsers(res.data.items);
            if (!n) props.setTotalCount(res.data.totalCount);
            props.changeRotation(false);
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
            <Preloader isRotation={isRotation}/>
            <User
                usersPage={props.usersPage}
                onChangePage={onChangePage}
                changeFollow={props.changeFollow} />
        </>
    )
}

export default UsersAPICont;