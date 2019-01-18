import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  Icon,
} from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountFields from './AccountFields/AccountFields';
import AccountPreferences from './AccountPreferences/AccountPreferences';
import CustomerPortalContainer from '../../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      { children }
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
  },
  button: {
    margin: theme.spacing.unit,
    borderRadius: '5px',
  },
  input: {
    display: 'none',
    borderRadius: '5px',
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: '#FFFFFF',
    paddingBottom: '15px',
  },
});

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <CustomerPortalContainer userType={2}>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              My Account
          </Typography>
        </div>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Account" />
            <Tab label="Profile" />
            <Tab label="Preferences" />
          </Tabs>
        </Paper>

        {/* Login & Security - Account */}
        {value === 0
        && (
        <TabContainer>
          <AccountFields label="Email" placeholder="Your current email address is &lt;teacher's email address&gt;" />
          <AccountFields label="Password" placeholder="Enter Current Password" />
          <AccountFields label="New Password" placeholder="Enter New Password" />
          <AccountFields label="Re-enter New Password" placeholder="Re-enter New Password" />
          <FormHelperText>*Save your preferences below for them to take effect</FormHelperText>
            <Button variant="contained" className={classes.button} color="primary">
            <ListItemIcon>
              <Icon>save</Icon>
            </ListItemIcon>
                Save Changes
            </Button>
            <Button variant="contained" className={classes.button} color="primary" disabled>
            <ListItemIcon>
              <Icon>cancel</Icon>
            </ListItemIcon>
                Discard Changes
            </Button>
        </TabContainer>
        )
        }

        {/* Personal Information - Profile */}
        {value === 1
        && (
            <TabContainer>
                <AccountFields label="Prefix" placeholder="" />
                <AccountFields label="First name" placeholder="*required" />
                <AccountFields label="Middle Initial" placeholder="" />
                <AccountFields label="Last Name" placeholder="*required" />
                <AccountFields label="Suffix" placeholder="" />
                <FormHelperText>
                  *Save your preferences below for them to take effect
                </FormHelperText>
                <Button variant="contained" className={classes.button} color="primary">
                <ListItemIcon>
                  <Icon>save</Icon>
                </ListItemIcon>
                    Save Changes
                </Button>
                <Button variant="contained" className={classes.button} color="primary" disabled>
                <ListItemIcon>
                  <Icon>cancel</Icon>
                </ListItemIcon>
                    Discard Changes
                </Button>
            </TabContainer>
          )
        }

        {/* Preferences */}
        {value === 2
          && (
            <TabContainer>
                <AccountPreferences />
                <Button variant="contained" className={classes.button} color="primary">
                <ListItemIcon>
                  <Icon>save</Icon>
                </ListItemIcon>
                    Save Changes
                </Button>
                <Button variant="contained" className={classes.button} color="primary" disabled>
                <ListItemIcon>
                  <Icon>cancel</Icon>
                </ListItemIcon>
                    Discard Changes
                </Button>
            </TabContainer>
            )
            }
      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(CenteredTabs);
