import axios from 'axios';

import ARIA_SERVER_URL from '../config';

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const EMAIL_EXISTS = 'EMAIL_EXISTS';

export const REGISTER_RESET = 'REGISTER_RESET';


export const registerUser = user => async (dispatch) => {
    try {
        await axios.post(`${ARIA_SERVER_URL}/account/email`, { email: user.email });

        try {
            await axios.post(`${ARIA_SERVER_URL}/account/register`, user);

            dispatch({
                type: REGISTER_USER_SUCCESS,
            });
        } catch (err) {
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: err,
            });
        }
    } catch (err) {
        dispatch({
            type: EMAIL_EXISTS,
        });
    }
};

export const registerReset = () => (dispatch) => {
    dispatch({
        type: REGISTER_RESET,
    });
};
