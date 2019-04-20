/* eslint-disable max-len */
import { connect } from 'react-redux';
import { registerUser, registerReset } from '../../../actions/RegisterActions';
import RegisterNewUser from '../../../components/NP-NonPortal/RegisterNewUser/RegisterNewUser';

const mapDispatchToProps = dispatch => ({
    registerUser: (user) => {
        dispatch(registerUser(user));
    },
    registerReset: () => {
        dispatch(registerReset());
    },
});

const mapStateToProps = ({ RegisterNewUser: { regStatus, error, emailExists } }) => ({ regStatus, error, emailExists });

export default connect(mapStateToProps, mapDispatchToProps)(RegisterNewUser);
