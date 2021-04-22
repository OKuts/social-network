import React, { useEffect } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthData } from '../../redux/authReducer';


function HeaderCont(props) {
    // Kuts -  violet
    useEffect(() => props.getAuthData(), [])
    return (
        <>
            <Header {...props} />
        </>
    );
}

const mapStateToProps = (state) => ({ authPage: state.authPage });
export default connect(mapStateToProps, { getAuthData })(HeaderCont);