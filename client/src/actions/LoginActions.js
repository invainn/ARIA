import axios from 'axios';

import ARIA_SERVER_URL from '../config';
import { ME_FROM_TOKEN_SUCCESS } from './AppActions';

export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginUser = user => async (dispatch) => {
    try {
        const result = await axios.post(`${ARIA_SERVER_URL}/account/login`, user);

        // After successful login, store the token inside of localStorage
        localStorage.setItem('jwtToken', result.data.token);

        dispatch({
            type: ME_FROM_TOKEN_SUCCESS,
            payload: result.data,
        });
    } catch (err) {
        dispatch({
            type: LOGIN_ERROR,
            payload: { error: 'Invalid username or password!' },
        });
    }
};
