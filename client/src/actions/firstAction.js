import axios from 'axios';
import ARIA_SERVER_URL from '../config';

export default async (dispatch) => {
    const result = await axios.get(ARIA_SERVER_URL);

    dispatch({
        type: 'FIRST_ACTION',
        payload: result.data,
    });
};
