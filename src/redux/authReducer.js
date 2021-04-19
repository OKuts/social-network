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
            return {...state, ...action.userData, isUser: true};
        default: return state;
    }
}

export const authUser = (userId,  login, email) => ({ type: SET_USER, userData: {userId,  login, email} });

export default authReducer;