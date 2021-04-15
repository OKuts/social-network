import * as axios from 'axios';
import React, { useEffect } from 'react';
import User from './User/User';
import spinner from '../../../assets/img/spinner.svg';
import st from './User/User.module.css';

const UsersAPICont = (props) => {

    const { currentPage, pageSize, isRotation } = props.usersPage;
    console.log(props.usersPage);
    const getServer = (n) => {
        props.changeRotation(true);
        let path = `https://social-network.samuraijs.com/api/1.0/users`;
        path += `?page=${n || currentPage}`;
        path += `&count=${pageSize}`;
        axios.get(path).then(res => {
            props.setUsers(res.data.items);
            console.log(res.data.totalCount);
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
            {isRotation && <img className={st.spinner} src={spinner} alt='spinner' />}
            <User
                usersPage={props.usersPage}
                onChangePage={onChangePage}
                changeFollow={props.changeFollow} />
        </>
    )
}

export default UsersAPICont;