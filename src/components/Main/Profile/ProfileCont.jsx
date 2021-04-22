import ProfileAPICont from './ProfileAPICont';
import { connect } from 'react-redux';
import {
    addPost,
    inputPost,
    getOneUser
} from '../../../redux/profileReducer';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({ profilePage: state.profilePage })

const ProfileAPIContWithURL =  withRouter(ProfileAPICont);

const ProfileCont = connect(mapStateToProps, {
    addPost,
    inputPost,
    getOneUser
})(ProfileAPIContWithURL)

export default ProfileCont;
