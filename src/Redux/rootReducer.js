import { combineReducer } from 'react-redux';
import { userReducer } from './User/userReducer';

export default combineReducer({
    user: userReducer
})