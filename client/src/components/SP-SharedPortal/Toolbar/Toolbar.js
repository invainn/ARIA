import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import logo from '../../NP-NonPortal/Shell/logo-header.png';

const drawerWidth = 300;

const styles = theme => ({
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
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
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
    shellLogo: {
      maxWidth: 85,
      paddingRight: '25px',
      margin: 'auto',
      marginLeft: '20px',
    },
    portalBar: {
      margin: 'auto',
      textAlign: 'center',
    },
    CustomerPortalWelcomeMessage: {
      marginLeft: '20px',
    },
    PortalHeaderContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    signOutButtonStyles: {
      marginRight: '20px',
    },
  });

const CustomerToolbar = ({ classes, open, togglePortalDrawer }) => (
  <div>
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, open && classes.appBarShift)}
      >
      <Grid container>
        <Grid xs={6}>
            <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={togglePortalDrawer}
                  className={
                        classNames(classes.menuButton, open && classes.hide)
                    }
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.PortalHeaderContainer}
                  noWrap
                >
                  <span><img variant="title" className={classes.shellLogo} src={logo} alt="NNMTA" /></span>
                  <span className={classes.CustomerPortalWelcomeMessage}>
                      Welcome, &lt;Customer Name&gt;
                  </span>
                </Typography>
            </Toolbar>
        </Grid>
        <Grid
          xs={6}
          alignItems="center"
          alignContent="center"
          justify="flex-end"
          container
        >
          <Button component={Link} to="/" className={classes.signOutButtonStyles}>
            <Typography variant="body2" color="textPrimary">
                Sign Out
            </Typography>
          </Button>
        </Grid>
      </Grid>
      </AppBar>
  </div>
);

export default withStyles(styles)(CustomerToolbar);
