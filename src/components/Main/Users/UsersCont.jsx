import UsersAPICont from './UsersAPICont';
import {
    changePage,
    getUsersData,
    setFollow,
} from '../../../redux/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ usersPage: state.usersPage });

const UsersCont = connect(mapStateToProps, {
    changePage,
    getUsersData,
    setFollow,
})(UsersAPICont)

export default UsersCont;