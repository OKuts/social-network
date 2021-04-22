import { combineReducers, createStore, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    authPage: authReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;