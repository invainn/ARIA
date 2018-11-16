import { TOGGLE_PORTAL_DRAWER } from '../actions/CustomerPortalActions';

export default (state = { open: false }, action) => {
    switch (action.type) {
        case TOGGLE_PORTAL_DRAWER:
            return { ...state, open: !state.open };
        default:
            return state;
    }
};
