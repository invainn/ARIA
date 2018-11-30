import { TOGGLE_THEME } from '../actions/ShellHeaderActions';

export default (state = { themeChoice: 'light' }, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return { ...state, themeChoice: (state.themeChoice === 'light') ? 'dark' : 'light' };
        default:
            return state;
    }
};
