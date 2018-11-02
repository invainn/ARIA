import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';

import ShellFooter from '../ShellFooter/ShellFooter';
import CustomerToolbar from './CustomerToolbar';
import CustomerDrawer from './CustomerDrawer';


const styles = () => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  portalContent: {
    flexGrow: 1,
    zIndex: 1,
    display: 'flex',
    height: '100%',
  },
});

const CustomerPortal = ({
 classes, open, children, togglePortalDrawer,
}) => (
  <div className={classes.root}>
      <CustomerToolbar open={open} togglePortalDrawer={togglePortalDrawer} />
      <CustomerDrawer open={open} togglePortalDrawer={togglePortalDrawer}>
        { children }
      </CustomerDrawer>
      <ShellFooter />
  </div>
);

CustomerPortal.propTypes = {
  classes: PropTypes.shape.isRequired,
  children: PropTypes.shape.isRequired,
  open: PropTypes.bool.isRequired,
  togglePortalDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(CustomerPortal);
