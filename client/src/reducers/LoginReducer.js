import {
    LOGIN_ERROR,
} from '../actions/LoginActions';

// Need to consolidate authtenticated into AppReducer
export default (state = { error: '' }, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            return { ...state, error: action.payload.error };
        default:
            return state;
    }
};
