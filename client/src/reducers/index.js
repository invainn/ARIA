import { combineReducers } from 'redux';
import FirstActionReducer from './FirstActionReducer';
import CustomerPortalReducer from './CustomerPortalReducer';
import ShellHeaderReducer from './ShellHeaderReducer';
import RegisterNewUserReducer from './RegisterNewUserReducer';
import LoginReducer from './LoginReducer';
import AppReducer from './AppReducer';

export default combineReducers({
    FirstAction: FirstActionReducer,
    CustomerPortal: CustomerPortalReducer,
    ShellHeader: ShellHeaderReducer,
    RegisterNewUser: RegisterNewUserReducer,
    Login: LoginReducer,
    App: AppReducer,
});
