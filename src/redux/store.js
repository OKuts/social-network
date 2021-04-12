import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, post: 'Hello' },
                { id: 1, post: 'By' },
                { id: 2, post: 'I eat meat' },
                { id: 3, post: 'Try again' },
            ],
            areaValue: ''
        },
        dialogPage: {
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
    },
    _rerenderTree() { },
    getState() {
        return this._state;
    },
    subscribe(cb) {
        this._rerenderTree = cb;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

        this._rerenderTree(this._state);
    }
}

export default store;