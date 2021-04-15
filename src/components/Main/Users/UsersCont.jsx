import UsersAPICont from './UsersAPICont';
import {
    changeFollow,
    setUsers,
    changePage,
    setTotalCount,
    changeRotation
} from '../../../redux/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ usersPage: state.usersPage });

const UsersCont = connect(mapStateToProps, {
    changeFollow,
    setUsers,
    changePage,
    setTotalCount,
    changeRotation,
})(UsersAPICont)

export default UsersCont;