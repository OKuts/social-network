import Dialogs from './Dialogs';
import {
    addMessageActionCreator,
    inputMessageActionCreator
} from '../../../redux/dialogReducer';
import { connect } from 'react-redux';
import { WithRedirect } from '../../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(addMessageActionCreator()),
        onChangeArea: (text) => dispatch(inputMessageActionCreator(text))
    }
}

const RedirectContWithAuth = WithRedirect(Dialogs);

const DialogsCont = connect(mapStateToProps, mapDispatchToProps)(RedirectContWithAuth)

export default DialogsCont;
