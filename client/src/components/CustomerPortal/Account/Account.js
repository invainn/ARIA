import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  Icon,
} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountFields from './AccountFields/AccountFields';
import AccountPreferences from './AccountPreferences/AccountPreferences';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

function TabContainer({ children }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      { children }
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
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
      <CustomerPortalContainer>
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
            <Tab label="Change Password" />
            <Tab label="Personal Information" />
            <Tab label="Contact Information" />
            <Tab label="Mailing Information" />
            <Tab label="Preferences" />
          </Tabs>
        </Paper>

        {/* Login & Security */}
        {value === 0
        && (
        <TabContainer>
            <AccountFields label="Username" placeholder="Current username" />
            <AccountFields label="Password" placeholder="Current password" />
            <AccountFields label="New Password" placeholder="Enter your new password here" />
            <AccountFields label="Re-enter New Password" placeholder="Re-enter your new password here" />
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

        {/* Personal Information */}
        {value === 1 && (
            <TabContainer>
                <AccountFields label="First name" placeholder="Customer's first name" />
                <AccountFields label="Middle Initial" placeholder="Customer's middle initial" />
                <AccountFields label="Last Name" placeholder="Customer's last name" />
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

        {/* Contact Information */}
        {value === 2
          && (
            <TabContainer>
                <AccountFields label="Email Address" placeholder="Customers current email address" />
                <AccountFields label="Primary Phone Number" placeholder="Customer's primary phone number" />
                <AccountFields label="Secondary Phone Number" placeholder="Customer's secondary phone number" />
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

        {/* Mailing Information */}
        {value === 3
          && (
            <TabContainer>
                <AccountFields label="Street Address Line 1" placeholder="Enter your address here" />
                <AccountFields label="Street Address Line 2" placeholder="Enter your address here" />
                <AccountFields label="City" placeholder="Enter your city here" />
                <AccountFields label="State/Province/Region" placeholder="Enter your state/province/region here" />
                <AccountFields label="Zip Code" placeholder="Enter your zip code here" />
                <AccountFields label="Country" placeholder="Enter your country here" />
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
        {value === 4
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

CenteredTabs.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(CenteredTabs);
