import { connect } from 'react-redux';
import { togglePortalDrawer } from '../../../actions/CustomerPortalActions';

import AdminDrawer from '../../../components/AdminPortal/AdminPortal';

const mapStateToProps = ({ AdminPortal: { open } }) => ({ open });

const mapDispatchToProps = dispatch => ({
    togglePortalDrawer: () => {
        dispatch(togglePortalDrawer());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDrawer);
