import { combineReducers } from 'redux';
import FirstActionReducer from './FirstActionReducer';
import CustomerPortalReducer from './CustomerPortalReducer';

export default combineReducers({
    FirstAction: FirstActionReducer,
    CustomerPortal: CustomerPortalReducer,
});
