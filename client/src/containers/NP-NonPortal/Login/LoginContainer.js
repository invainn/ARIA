import { connect } from 'react-redux';
import { loginUser } from '../../../actions/LoginActions';
import Login from '../../../components/NP-NonPortal/Login/Login';

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => {
        dispatch(loginUser(user));
    },
});

const mapStateToProps = ({ App: { authenticated } }) => ({ authenticated });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
