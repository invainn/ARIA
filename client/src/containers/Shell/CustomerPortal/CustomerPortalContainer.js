import { connect } from 'react-redux';
import { togglePortalDrawer } from '../../../actions/CustomerPortalActions';

import CustomerDrawer from '../../../components/CustomerPortal/CustomerPortal';

const mapStateToProps = ({ CustomerPortal: { open } }) => ({ open });

const mapDispatchToProps = dispatch => ({
    togglePortalDrawer: () => {
        dispatch(togglePortalDrawer());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDrawer);
