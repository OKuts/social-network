import Dialogs from './Dialogs';
import {
    addMessageActionCreator,
    inputMessageActionCreator
} from '../../../redux/dialogReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithRedirect
)(Dialogs);
