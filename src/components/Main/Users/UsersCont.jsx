import UsersAPICont from './UsersAPICont';
import {
    onFollow,
    offFollow,
    setUsers,
    changePage,
    setTotalCount,
    changeRotation
} from '../../../redux/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ usersPage: state.usersPage });

const UsersCont = connect(mapStateToProps, {
    onFollow,
    offFollow,
    setUsers,
    changePage,
    setTotalCount,
    changeRotation,
})(UsersAPICont)

export default UsersCont;