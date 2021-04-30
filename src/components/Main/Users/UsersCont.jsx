import { compose } from 'redux';
import UsersAPICont from './UsersAPICont';
import { withRedirect } from '../../../hoc/withAuthRedirect';
import {
    changePage,
    getUsersData,
    setFollow,
} from '../../../redux/usersReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ usersPage: state.usersPage });

export default compose(
    connect(mapStateToProps, { changePage, getUsersData, setFollow }),
    withRedirect
)(UsersAPICont);