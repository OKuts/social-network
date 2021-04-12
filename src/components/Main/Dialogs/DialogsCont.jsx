import Dialogs from './Dialogs';
import {
    addMessageActionCreator,
    inputMessageActionCreator
} from '../../../redux/dialogReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ dialogPage: state.dialogPage });
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(addMessageActionCreator()),
        onChangeArea: (text) => dispatch(inputMessageActionCreator(text))
    }
}
const DialogsCont = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsCont;

// function DialogsCont(props) {
//     const dialogPage = props.store.getState().dialogPage;

//     const sendMessage = () => props.store.dispatch(addMessageActionCreator());

//     const onChangeArea = (text) => props.store.dispatch(
//         inputMessageActionCreator(text));

//     return (
//         <Dialogs
//             dialogPage={dialogPage}
//             onChangeArea={onChangeArea}
//             sendMessage={sendMessage}

//         />
//     );
// }