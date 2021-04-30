import ProfileAPICont from './ProfileAPICont';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    addPost,
    inputPost,
    getOneUser,
    getUserStatus,
    updateUserStatus
} from '../../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withRedirect } from '../../../hoc/withAuthRedirect';

const ProfileAPIContWithURL = withRouter(ProfileAPICont);

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            addPost, inputPost, getOneUser,
            getUserStatus, updateUserStatus
        }),
    withRedirect
)(ProfileAPIContWithURL);
