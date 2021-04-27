import ProfileAPICont from './ProfileAPICont';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
    addPost,
    inputPost,
    getOneUser
} from '../../../redux/profileReducer';
import { withRouter } from 'react-router';

const ProfileAPIContWithURL =  withRouter(ProfileAPICont);

const mapStateToProps = (state) => {
   return {
    profilePage: state.profilePage,
    isAuth: state.authPage.isUser
   }
}

const ProfileContWithAuth = (props)=>{
    return !props.isAuth ? <Redirect to={'/login'} /> : <ProfileAPIContWithURL {...props} />
}

const ProfileCont = connect(mapStateToProps, {
    addPost,
    inputPost,
    getOneUser
})(ProfileContWithAuth)

export default ProfileCont;
