import { connect } from 'react-redux';
import { resetToken } from '../../../actions/AppActions';

import PortalDrawer from '../../../components/SP-SharedPortal/PortalDrawer/PortalDrawer';

const mapDispatchToProps = dispatch => ({
    resetToken: () => {
        dispatch(resetToken());
    },
});

export default connect(null, mapDispatchToProps)(PortalDrawer);
