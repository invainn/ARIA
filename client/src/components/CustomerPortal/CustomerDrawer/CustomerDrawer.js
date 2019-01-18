import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'; // STOP IT
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Do not do this
const drawerWidth = 300;

const styles = theme => ({
  portalDrawer: {
    flexGrow: 1,
    zIndex: 1,
    display: 'flex',
    height: '80%',
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
    overflow: 'hidden',
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

class CustomerDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      something: '',
    };
  }

  renderList(userType) {
    if (userType === 0) {
      return (
        <div>
          <ListItem button component={Link} to="/admin/portal" onClick={this.switchToDashboardHandler}>
            <ListItemIcon>
              <Icon>dashboard</Icon>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/admin/create-an-event" onClick={this.switchToAccountHandler}>
            <ListItemIcon>
              <Icon>account_box</Icon>
            </ListItemIcon>
            <ListItemText primary="Create an Event" />
          </ListItem>
          <ListItem button component={Link} to="/admin/modify-event" onClick={this.switchToRegStudHandler}>
            <ListItemIcon>
              <Icon>group_add</Icon>
            </ListItemIcon>
            <ListItemText primary="Modify Events" />
          </ListItem>
          <ListItem button component={Link} to="/admin/generate-documents" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>calendar_today</Icon>
            </ListItemIcon>
            <ListItemText primary="Generate Documents" />
          </ListItem>
          <ListItem button component={Link} to="/admin/upload-music" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>event_available</Icon>
            </ListItemIcon>
            <ListItemText primary="Upload Music" />
          </ListItem>
        </div>
      );
    }

    if (userType === 2) {
      return (
        <div>
          <ListItem button component={Link} to="/teacher-portal" onClick={this.switchToDashboardHandler}>
            <ListItemIcon>
              <Icon>dashboard</Icon>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/teacher-portal/teacher-account" onClick={this.switchToAccountHandler}>
            <ListItemIcon>
              <Icon>account_box</Icon>
            </ListItemIcon>
            <ListItemText primary="Account Settings" />
          </ListItem>
          <ListItem button component={Link} to="/teacher-portal/my-students" onClick={this.switchToRegStudHandler}>
            <ListItemIcon>
              <Icon>group_add</Icon>
            </ListItemIcon>
            <ListItemText primary="My Students" />
          </ListItem>
          <ListItem button component={Link} to="/teacher-portal/student-registrations" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>calendar_today</Icon>
            </ListItemIcon>
            <ListItemText primary="Student Registrations" />
          </ListItem>
          <ListItem button component={Link} to="/teacher-portal/events-calendar" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>event_available</Icon>
            </ListItemIcon>
            <ListItemText primary="Events Calendar" />
          </ListItem>
          <ListItem button component={Link} to="/teacher-portal/volunteer-for-an-event" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>event</Icon>
            </ListItemIcon>
            <ListItemText primary="Volunteer for an Event" />
          </ListItem>
        </div>
      );
      }

        return (
          <div>
            <ListItem button component={Link} to="/customer" onClick={this.switchToDashboardHandler}>
              <ListItemIcon>
                <Icon>dashboard</Icon>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/customer/account-info" onClick={this.switchToAccountHandler}>
              <ListItemIcon>
                <Icon>account_box</Icon>
              </ListItemIcon>
              <ListItemText primary="My Account" />
            </ListItem>
            <ListItem button component={Link} to="/customer/participants" onClick={this.switchToRegStudHandler}>
              <ListItemIcon>
                <Icon>group_add</Icon>
              </ListItemIcon>
              <ListItemText primary="Participants" />
            </ListItem>
            <ListItem button component={Link} to="/customer/events-calendar" onClick={this.switchOptionHandler}>
              <ListItemIcon>
                <Icon>calendar_today</Icon>
              </ListItemIcon>
              <ListItemText primary="Events Calendar" />
            </ListItem>
            <ListItem button component={Link} to="/customer/register-for-an-event" onClick={this.switchOptionHandler}>
              <ListItemIcon>
                <Icon>event_available</Icon>
              </ListItemIcon>
              <ListItemText primary="Register for an Event" />
            </ListItem>
            <ListItem button component={Link} to="/customer/active-registrations" onClick={this.switchOptionHandler}>
              <ListItemIcon>
                <Icon>event</Icon>
              </ListItemIcon>
              <ListItemText primary="Active Registrations" />
            </ListItem>
          </div>
        );
  }

  render() {
    const {
      classes,
      theme,
      open,
      togglePortalDrawer,
      userType = 1,
    } = this.props;

    const { something } = this.state;

    return (
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
              }}
              open={open}
            >
            <div className={classes.toolbar}>
                <IconButton onClick={togglePortalDrawer}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  {something}
                </IconButton>
            </div>
            <Divider />
              <List>
                {this.renderList(userType)}
              </List>
            <Divider />
              <List>
                <div>
                  <ListItem button component={Link} to="/customer/faq" onClick={this.switchToFAQHandler}>
                    <ListItemIcon>
                      <Icon>help_outline</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Frequently Asked Questions" />
                  </ListItem>
                  <ListItem button component={Link} to="/customer/about" onClick={this.switchToAboutUsHandler}>
                    <ListItemIcon>
                      <Icon>music_note</Icon>
                    </ListItemIcon>
                    <ListItemText primary="About Us" />
                  </ListItem>
                </div>
              </List>
            <Divider />
            </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CustomerDrawer);
