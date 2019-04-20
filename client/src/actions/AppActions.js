import axios from 'axios';

import ARIA_SERVER_URL from '../config';

export const ME_FROM_TOKEN = 'ME_FROM_TOKEN';
export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS';
export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE';
export const ME_FROM_TOKEN_NO_AUTH = 'ME_FROM_TOKEN_NO_AUTH';
export const RESET_TOKEN = 'RESET_TOKEN';

export const meFromToken = token => dispatch => new Promise(async (resolve, reject) => {
    try {
        const req = await axios.post(`${ARIA_SERVER_URL}/account/token`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        dispatch({
            type: ME_FROM_TOKEN,
            payload: req,
        });

        resolve(req);
    } catch (error) {
        reject(error);
    }
});

export const meFromTokenSuccess = (type, name) => ({
    type: ME_FROM_TOKEN_SUCCESS,
    payload: { type, name },
});

export const meFromTokenFailure = error => ({
    type: ME_FROM_TOKEN_FAILURE,
    payload: error,
});

export const meFromTokenNoAuth = () => ({
    type: ME_FROM_TOKEN_NO_AUTH,
});

export const resetToken = () => ({
    type: RESET_TOKEN,
});
