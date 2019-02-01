import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ShellFooter from '../NP-NonPortal/Shell/ShellFooter/ShellFooter';
import ShellHeader from '../NP-NonPortal/Shell/ShellHeader/ShellHeader';
import CustomerDrawer from '../SP-SharedPortal/PortalDrawer/PortalDrawer';

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
 classes, open, children, togglePortalDrawer, userType,
}) => (
  <div className={classes.root}>
      <ShellHeader open={open} togglePortalDrawer={togglePortalDrawer} portal="true" />
      <div className={classes.portalContent}>
        <CustomerDrawer open={open} togglePortalDrawer={togglePortalDrawer} userType={userType} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          { children }
        </main>
      </div>
      <ShellFooter />
  </div>
);

export default withStyles(styles, { withTheme: true })(CustomerPortal);
