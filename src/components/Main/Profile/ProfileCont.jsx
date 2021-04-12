import Profile from './Profile';
import { connect } from 'react-redux';
import {
    addPostActionCreator,
    inputPostActionCreator
} from '../../../redux/profileReducer';

const mapStateToProps = (state) => ({profilePage: state.profilePage})

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        onChangeTextArea: (text) => dispatch(inputPostActionCreator(text))
    }
}
const ProfileCont = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileCont;

// const ProfileCont = (props) => {

//     const profilePage = props.store.getState().profilePage;

//     const addPost = () => props.store.dispatch(addPostActionCreator());
//     const onChangeTextArea = (text) =>
//         props.store.dispatch(inputPostActionCreator(text));

//     return (
//         <>
//             <Profile
//                 onChangeTextArea={onChangeTextArea}
//                 addPost={addPost}
//                 profilePage={profilePage}
//             />
//         </>
//     )
// }