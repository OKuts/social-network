import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.authPage.isUser
    }
}

const WithAuthRedirect = (Component) => (props) => {
    return (
        !props.isAuth
            ? <Redirect to={'/login'} />
            : <Component {...props} />
    )
}

export const WithRedirect = (Component) => {
    return connect(mapStateToPropsForRedirect)(WithAuthRedirect(Component));
}