import {usersAPI} from '../api/api';

const ADD_POST = 'ADD_POST';
const CHANGE_AREA_POST = 'CHANGE_AREA_POST';
const SET_ONE_USER = 'SET_ONE_USER';

const initState = {
    posts: [
        { id: 0, post: 'Hello' },
        { id: 1, post: 'By' },
        { id: 2, post: 'I eat meat' },
        { id: 3, post: 'Try again' },
    ],
    currentUser: null,
    areaValue: ''
}

const profileReducer = (state = initState, action) => {
    const stateCopy = { ...{}, ...state };
    switch (action.type) {
        case ADD_POST:
            const newPost = { id: 5, post: stateCopy.areaValue };
            stateCopy.posts.push(newPost);
            stateCopy.areaValue = '';
            return stateCopy;
        case CHANGE_AREA_POST:
            stateCopy.areaValue = action.text;
            return stateCopy;
        case SET_ONE_USER:
            stateCopy.currentUser = action.currentUser;
            return stateCopy;
        default: return state;
    }
}


export const addPost = () => ({ type: ADD_POST });
export const inputPost = (text) => ({ type: CHANGE_AREA_POST, text });
export const setUserProfile = (currentUser) => ({ type: SET_ONE_USER, currentUser });


export const getOneUser = (id) => {
    return (dispatch) => {
        usersAPI.usersServerData('profile/' + id, 'get')
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export default profileReducer;