const ADD_POST = "ADD_POST";
const CHANGE_AREA_POST = "CHANGE_AREA_POST";

const initState = {
    posts: [
        { id: 0, post: 'Hello' },
        { id: 1, post: 'By' },
        { id: 2, post: 'I eat meat' },
        { id: 3, post: 'Try again' },
    ],
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
        default: return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST });
export const inputPostActionCreator = (text) => ({ type: CHANGE_AREA_POST, text });

export default profileReducer;