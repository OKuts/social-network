import ProfileAPICont from './ProfileAPICont';
import { connect } from 'react-redux';
import {
    addPost,
    inputPost,
    getOneUser
} from '../../../redux/profileReducer';
import { withRouter } from 'react-router';
import {WithRedirect} from '../../../hoc/withAuthRedirect';

const ProfileAPIContWithURL =  withRouter(ProfileAPICont);

const mapStateToProps = (state) => {
   return {
    profilePage: state.profilePage,
   }
}

const RedirectContWithAuth = WithRedirect(ProfileAPIContWithURL);

const ProfileCont = connect(mapStateToProps, {
    addPost,
    inputPost,
    getOneUser
})( RedirectContWithAuth)

export default ProfileCont;
