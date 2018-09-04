import { connect } from 'react-redux';
import { firstAction } from '../../actions/firstAction';

import App from '../../components/App/App';

const mapStateToProps = (result = '') => {
    return {
        data: result
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
       firstAction: () => {
            dispatch(firstAction)
       } 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)