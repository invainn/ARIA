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
const drawerWidth = 400;

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
    marginLeft: 16,
    marginRight: 40,
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

class PortalDrawer extends Component {
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
          { /* ADMIN */ }
          <ListItem button component={Link} to="/admin/dashboard" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>dashboard</Icon>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/admin/create-an-event" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>create</Icon>
            </ListItemIcon>
            <ListItemText primary="Create An Event" />
          </ListItem>
          <ListItem button component={Link} to="/admin/schedule-an-event" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>schedule</Icon>
            </ListItemIcon>
            <ListItemText primary="Schedule An Event" />
          </ListItem>
          <ListItem button component={Link} to="/admin/edit-an-event" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>event_note</Icon>
            </ListItemIcon>
            <ListItemText primary="View/Modify An Event" />
          </ListItem>
          <ListItem button component={Link} to="/admin/schedule-command-performance" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>schedule</Icon>
            </ListItemIcon>
            <ListItemText primary="Schedule Command Performance" />
          </ListItem>
          <ListItem button component={Link} to="/admin/edit-command-performance" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>event_note</Icon>
            </ListItemIcon>
            <ListItemText primary="View/Modify Command Performance" />
          </ListItem>
          <ListItem button component={Link} to="/admin/add-a-teacher" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>person_add</Icon>
            </ListItemIcon>
            <ListItemText primary="Add A Teacher" />
          </ListItem>
          <ListItem button component={Link} to="/admin/generate-documents" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>note_add</Icon>
            </ListItemIcon>
            <ListItemText primary="Generate Documents" />
          </ListItem>
          <ListItem button component={Link} to="/admin/upload-documents" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>cloud_upload</Icon>
            </ListItemIcon>
            <ListItemText primary="Upload Documents" />
          </ListItem>
          <ListItem button component={Link} to="/admin/upload-music" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>cloud_upload</Icon>
            </ListItemIcon>
            <ListItemText primary="Upload Music" />
          </ListItem>
          <ListItem button component={Link} to="/admin/events" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>event</Icon>
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem button component={Link} to="/admin/teachers" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>school</Icon>
            </ListItemIcon>
            <ListItemText primary="Teachers" />
          </ListItem>
          <ListItem button component={Link} to="/admin/students" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>people</Icon>
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem button component={Link} to="/admin/edit-event-calender" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>calendar_today</Icon>
            </ListItemIcon>
            <ListItemText primary="View/Modify Events Calendar" />
          </ListItem>
          <ListItem button component={Link} to="/admin/edit-faq" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>help_outline</Icon>
            </ListItemIcon>
            <ListItemText primary="View/Modify FAQ" />
          </ListItem>
          <ListItem button component={Link} to="/admin/edit-about-us" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>music_note</Icon>
            </ListItemIcon>
            <ListItemText primary="View/Modify About Us" />
          </ListItem>
          <ListItem button component={Link} to="/admin/notifications" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>notification_important</Icon>
            </ListItemIcon>
            <ListItemText primary="Create/Send A Notification" />
          </ListItem>
          <ListItem button component={Link} to="/admin/news" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>subtitles</Icon>
            </ListItemIcon>
            <ListItemText primary="View/Modify News" />
          </ListItem>
        </div>
      );
    }

    if (userType === 2) {
      return (
        <div>
          { /* TEACHER */ }
          <ListItem button component={Link} to="/teacher/dashboard" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>dashboard</Icon>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/teacher/account" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>account_box</Icon>
            </ListItemIcon>
            <ListItemText primary="My Account" />
          </ListItem>
          <ListItem button component={Link} to="/teacher/my-students" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>group</Icon>
            </ListItemIcon>
            <ListItemText primary="My Students" />
          </ListItem>
          <ListItem button component={Link} to="/teacher/student-registrations" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>calendar_today</Icon>
            </ListItemIcon>
            <ListItemText primary="Student Registrations" />
          </ListItem>
          <ListItem button component={Link} to="/teacher/tasks" onClick={this.switchOptionHandler}>
            <ListItemIcon>
              <Icon>event</Icon>
            </ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItem>
          <ListItem button component={Link} to="/teacher/events-calendar" onClick={this.switchOptionHandler}>
              <ListItemIcon>
                <Icon>calendar_today</Icon>
              </ListItemIcon>
              <ListItemText primary="Events Calendar" />
          </ListItem>
        </div>
      );
      }

        return (
          <div>
            { /* CUSTOMER */ }
            <ListItem button component={Link} to="/customer/dashboard" onClick={this.switchOptionHandler}>
              <ListItemIcon>
                <Icon>dashboard</Icon>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/customer/account" onClick={this.switchOptionHandler}>
              <ListItemIcon>
                <Icon>account_box</Icon>
              </ListItemIcon>
              <ListItemText primary="My Account" />
            </ListItem>
            <ListItem button component={Link} to="/customer/participants" onClick={this.switchOptionHandler}>
              <ListItemIcon>
                <Icon>group_add</Icon>
              </ListItemIcon>
              <ListItemText primary="My Participants" />
            </ListItem>
            <ListItem button component={Link} to="/customer/register-for-an-event" onClick={this.switchOptionHandler}>
              <ListItemIcon>
                <Icon>event_available</Icon>
              </ListItemIcon>
              <ListItemText primary="Register for an Event" />
            </ListItem>
            <ListItem button component={Link} to="/customer/my-enrollments" onClick={this.switchOptionHandler}>
              <ListItemIcon>
                <Icon>event</Icon>
              </ListItemIcon>
              <ListItemText primary="My Enrollments" />
            </ListItem>
            <ListItem button component={Link} to="/customer/events-calendar" onClick={this.switchOptionHandler}>
              <ListItemIcon>
                <Icon>calendar_today</Icon>
              </ListItemIcon>
              <ListItemText primary="Events Calendar" />
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

export default withStyles(styles, { withTheme: true })(PortalDrawer);
