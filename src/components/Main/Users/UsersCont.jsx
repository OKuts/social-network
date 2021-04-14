import UsersAPICont from './UsersAPICont';
import {
    followAC,
    setUsersAC,
    changePageAC,
    setTotalCountAC
} from '../../../redux/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ usersPage: state.usersPage });
const mapDispatchToProps = (dispatch) => {
    return {
        changeFollow: (id) => dispatch(followAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        changePage: (newPage) => dispatch(changePageAC(newPage)),
        setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount))
    }
}
const UsersCont = connect(mapStateToProps, mapDispatchToProps)(UsersAPICont)

export default UsersCont;