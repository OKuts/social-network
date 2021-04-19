import React, { useEffect } from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {
    authUser
} from '../../redux/authReducer';

function HeaderCont(props) {
    // Kuts -  violet
    useEffect(() => {
        let path = `https://social-network.samuraijs.com/api/1.0/auth/me`;
        axios.get(path, {
            withCredentials: true
        })
            .then(
                res => {
                    if (res.data.resultCode === 0) {
                        const { id, login, email } = res.data.data;
                        props.authUser(id, login, email);
                    }

                })
    }, [])
    return (
        <>
            <Header {...props}/>
        </>
    );
}

const mapStateToProps = (state) => ({ authPage: state.authPage });
export default connect(mapStateToProps, { authUser })(HeaderCont);