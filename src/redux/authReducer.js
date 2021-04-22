import { usersAPI } from '../api/api';


const SET_USER = "SET_USER";

const initState = {
    userId: null,
    email: null,
    login: null,
    isUser: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, ...action.userData, isUser: true };
        default: return state;
    }
}

export const authUser = (userId, login, email) => ({ type: SET_USER, userData: { userId, login, email } });

export const getAuthData = () => {
    return (dispatch) => {
        usersAPI.usersServerData('auth/me', 'get')
            .then(
                res => {
                    if (res.resultCode === 0) {
                        const { id, login, email } = res.data;
                        dispatch(authUser(id, login, email));
                    }

                })
    }
}

export default authReducer;