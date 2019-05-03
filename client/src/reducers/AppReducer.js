import {
    ME_FROM_TOKEN_SUCCESS,
    ME_FROM_TOKEN_FAILURE,
    ME_FROM_TOKEN_NO_AUTH,
    RESET_TOKEN,
} from '../actions/AppActions';

const defaultState = {
    authenticated: false,
    error: '',
    type: null,
    name: '',
    id: -1,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case ME_FROM_TOKEN_FAILURE:
            return { ...state, error: action.payload.error, type: -1 };
        case ME_FROM_TOKEN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                error: '',
                type: action.payload.type,
                name: action.payload.name,
                id: action.payload.id,
            };
        case ME_FROM_TOKEN_NO_AUTH:
            return { ...state, type: -1 };
        case RESET_TOKEN:
            return { ...state, authenticated: false };
        default:
            return { ...state };
    }
};
