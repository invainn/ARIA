import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ShellFooter from '../Shell/ShellFooter/ShellFooter';
import ShellHeader from '../Shell/ShellHeader/ShellHeader';
import CustomerDrawer from './CustomerDrawer/CustomerDrawer';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  portalContent: {
    display: 'flex',
    height: '80%',
    flexDirection: 'row',
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

const CustomerPortal = ({
 classes, open, children, togglePortalDrawer,
}) => (
  <div className={classes.root}>
      <ShellHeader open={open} togglePortalDrawer={togglePortalDrawer} />
      <div className={classes.portalContent}>
        <CustomerDrawer open={open} togglePortalDrawer={togglePortalDrawer} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          { children }
        </main>
      </div>
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
