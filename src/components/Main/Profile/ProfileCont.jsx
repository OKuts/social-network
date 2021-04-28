import ProfileAPICont from './ProfileAPICont';
import { connect } from 'react-redux';
import {
    addPost,
    inputPost,
    getOneUser
} from '../../../redux/profileReducer';
import { withRouter } from 'react-router';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';

const ProfileAPIContWithURL =  withRouter(ProfileAPICont);

const mapStateToProps = (state) => {
   return {
    profilePage: state.profilePage,
   }
}

const mapStateToPropsForRedirect = (state) => {
    return {
     isAuth: state.authPage.isUser
    }
 }

const RedirectContWithAuth = withAuthRedirect(ProfileAPIContWithURL);
const RedirectContWithAuthConnect = connect(mapStateToPropsForRedirect)(RedirectContWithAuth);

const ProfileCont = connect(mapStateToProps, {
    addPost,
    inputPost,
    getOneUser
})( RedirectContWithAuthConnect)

export default ProfileCont;
