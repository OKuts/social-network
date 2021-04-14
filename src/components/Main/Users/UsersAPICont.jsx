import * as axios from 'axios';
import React, { useEffect } from 'react';
import User from './User/User';

const UsersAPICont = (props) => {

    const { currentPage, pageSize } = props.usersPage;

    const getServer = (n) => {
        let path = `https://social-network.samuraijs.com/api/1.0/users`;
        path += `?page=${n || currentPage}`;
        path += `&count=${pageSize}`
        axios.get(path).then(res => {
            props.setUsers(res.data.items);
            if (!n) props.setTotalCount(res.data.totalCount);
        });
    }

    useEffect(() => {
        getServer();
        console.log('effect');
    }, [])

    const onChangePage = (i) => {
        props.changePage(i);
        getServer(i);
    }

    return (
        <User
            usersPage={props.usersPage}
            onChangePage={onChangePage}
            changeFollow={props.changeFollow} />
    )
}

export default UsersAPICont;