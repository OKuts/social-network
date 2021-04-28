import Dialogs from './Dialogs';
import {
    addMessageActionCreator,
    inputMessageActionCreator
} from '../../../redux/dialogReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
};

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.authPage.isUser
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(addMessageActionCreator()),
        onChangeArea: (text) => dispatch(inputMessageActionCreator(text))
    }
}

const RedirectContWithAuth = withAuthRedirect(Dialogs);
const RedirectContWithAuthConnect = connect(mapStateToPropsForRedirect)(RedirectContWithAuth)

const DialogsCont = connect(mapStateToProps, mapDispatchToProps)(RedirectContWithAuthConnect)

export default DialogsCont;
