import ProfileAPICont from './ProfileAPICont';
import { connect } from 'react-redux';
import {
    addPost,
    inputPost,
    setUserProfile
} from '../../../redux/profileReducer';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({ profilePage: state.profilePage })

const ProfileAPIContWithURL =  withRouter(ProfileAPICont);

const ProfileCont = connect(mapStateToProps, { addPost, inputPost, setUserProfile })(ProfileAPIContWithURL)

export default ProfileCont;
