import {combineReducers} from 'redux';
import registerUsers from './register';

export default combineReducers({
    register: registerUsers,   
})