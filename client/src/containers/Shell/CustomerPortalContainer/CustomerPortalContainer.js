/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { togglePortalDrawer } from '../../../actions/CustomerPortalActions';

import CustomerDrawer from '../../../components/CP-CustomerPortal/CustomerPortal';

const mapStateToProps = ({ CustomerPortal: { open } }, props) => ({ open });

const mapDispatchToProps = (dispatch, props) => ({
    togglePortalDrawer: () => {
        dispatch(togglePortalDrawer());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDrawer);
