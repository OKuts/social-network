import UsersAPICont from './UsersAPICont';
import {
    followAC,
    setUsersAC,
    changePageAC,
    setTotalCountAC,
    changeRotation
} from '../../../redux/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ usersPage: state.usersPage });
const mapDispatchToProps = (dispatch) => {
    return {
        changeFollow: (id) => dispatch(followAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        changePage: (newPage) => dispatch(changePageAC(newPage)),
        setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
        changeRotation: (isRotation) => dispatch(changeRotation(isRotation)),
    }
}
const UsersCont = connect(mapStateToProps, mapDispatchToProps)(UsersAPICont)

export default UsersCont;