import React from 'react';
import { Redirect } from 'react-router-dom';

export const withAuthRedirect = (Component) => (props) => {
    return !props.isAuth ? <Redirect to={'/login'} /> : <Component {...props} />
}

