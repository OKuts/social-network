const CHANGE_AREA_MESSAGE = "CHANGE_AREA_MESSAGE";
const ADD_MESSAGE = "ADD_MESSAGE";

const initState = {
    messages: [
        { id: 0, message: 'I love you' },
        { id: 1, message: 'Yo Yo Yo' },
        { id: 2, message: 'Put my things' },
        { id: 3, message: 'Good Bye' },
    ],
    dialogs: [
        { id: 0, name: 'Sasha' },
        { id: 1, name: 'Nick' },
        { id: 2, name: 'Pit' },
        { id: 3, name: 'Lena' },
    ],
    areaValue: ''
}

const dialogReducer = (state = initState, action) => {
    const stateCopy = { ...{}, ...state };
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 10,
                message: stateCopy.areaValue
            }
            stateCopy.messages.push(newMessage);
            stateCopy.areaValue = '';
            return stateCopy;
        case CHANGE_AREA_MESSAGE:
            stateCopy.areaValue = action.text;
            return stateCopy;
        default: return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const inputMessageActionCreator = (text) => ({ type: CHANGE_AREA_MESSAGE, text });

export default dialogReducer;