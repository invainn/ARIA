import { combineReducers } from 'redux';
import FirstActionReducer from './FirstActionReducer';
import CustomerPortalReducer from './CustomerPortalReducer';
import ShellHeaderReducer from './ShellHeaderReducer';

export default combineReducers({
    FirstAction: FirstActionReducer,
    CustomerPortal: CustomerPortalReducer,
    ShellHeader: ShellHeaderReducer,
});
