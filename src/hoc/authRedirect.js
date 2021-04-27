import React from 'react';

export const authRedirect = (Component) => {
    return (
        <>
            {!props.isAuth ? <Redirect to={'/login'} /> : <Component {...props} />}
        </>
    )
}