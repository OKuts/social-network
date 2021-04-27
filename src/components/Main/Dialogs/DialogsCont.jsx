import Dialogs from './Dialogs';
import {Redirect} from 'react-router-dom';
import {
    addMessageActionCreator,
    inputMessageActionCreator
} from '../../../redux/dialogReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.authPage.isUser
    }};
    
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => dispatch(addMessageActionCreator()),
        onChangeArea: (text) => dispatch(inputMessageActionCreator(text))
    }
}

const DialogsContWithAuth = (props)=>{
    return !props.isAuth ? <Redirect to={'/login'} /> : <Dialogs {...props} />
}

const DialogsCont = connect(mapStateToProps, mapDispatchToProps)(DialogsContWithAuth)

export default DialogsCont;
