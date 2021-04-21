import React, { useEffect } from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {
    authUser
} from '../../redux/authReducer';
import { usersAPI } from '../../api/api';

function HeaderCont(props) {
    // Kuts -  violet
    useEffect(() => {
        usersAPI.usersServerData('auth/me', 'get')
            .then(
                res => {
                    if (res.resultCode === 0) {
                        const { id, login, email } = res.data;
                        props.authUser(id, login, email);
                    }

                })
    }, [])
    return (
        <>
            <Header {...props} />
        </>
    );
}

const mapStateToProps = (state) => ({ authPage: state.authPage });
export default connect(mapStateToProps, { authUser })(HeaderCont);