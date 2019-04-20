import { connect } from 'react-redux';

import App from '../../components/App/App';
import {
    meFromToken,
    meFromTokenNoAuth,
    meFromTokenFailure,
    meFromTokenSuccess,
    resetToken,
} from '../../actions/AppActions';

const mapDispatchToProps = dispatch => ({
    loadUserFromToken: async () => {
        const token = localStorage.getItem('jwtToken');

        if (!token || token === '') {
            dispatch(meFromTokenNoAuth());
            return;
        }

        try {
            const res = await dispatch(meFromToken(token));

            localStorage.setItem('jwtToken', token);
            dispatch(meFromTokenSuccess(res.data.type, res.data.name));
        } catch (error) {
            localStorage.removeItem('jwtToken');
            dispatch(meFromTokenFailure(error));
        }
    },

    resetMe: () => {
        localStorage.removeItem('jwtToken');
        dispatch(resetToken());
    },
});

const mapStateToProps = ({ App: { type } }) => ({ type });

export default connect(mapStateToProps, mapDispatchToProps)(App);
