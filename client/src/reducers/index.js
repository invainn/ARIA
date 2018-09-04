import { combineReducers } from 'redux';
import FirstActionReducer from './FirstActionReducer';

export default combineReducers({
    FirstAction: FirstActionReducer    
});
