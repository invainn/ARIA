import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    EMAIL_EXISTS,
    REGISTER_RESET,
} from '../actions/RegisterActions';

export default (state = { emailExists: null, regStatus: 0, error: '' }, action) => {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                regStatus: 1,
                emailExists: false,
                error: '',
            };
        case REGISTER_USER_ERROR:
            return { ...state, regStatus: 2, error: action.payload };
        case EMAIL_EXISTS:
            return { ...state, emailExists: true };
        case REGISTER_RESET:
            return { ...state, regStatus: 0 };
        default:
            return state;
    }
};
