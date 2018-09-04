import { ARIA_SERVER_URL } from '../config';
import axios from 'axios';

export const firstAction = async (dispatch) => {
    const result = await axios.get(ARIA_SERVER_URL);

    dispatch({
        type: 'FIRST_ACTION',
        payload: result.data
    });
};