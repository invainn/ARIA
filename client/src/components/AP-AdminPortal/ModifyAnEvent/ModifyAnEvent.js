/**
 * TODO: This page requires the scheduler to be implemented so we can pull it and modify
 */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Divider,
} from '@material-ui/core';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: '1300px',
    maxHeight: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px 20px 20px 20px',
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
    textDecorationColor: (theme.palette.type === 'light') ? '#000000' : '#FFFFFF',
    paddingBottom: '15px',
  },
});

class ModifyAnEvent extends Component {
  state = {
  };

  handleChange = () => {
    this.setState({});
  };

  render() {
    const { classes } = this.props;

    return (
      <CustomerPortalContainer userType={0}>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              View/Modify An Event
          </Typography>
        </div>
        <Paper className={classes.root}>
          <Typography variant="h6" align="center">
              Edit changes as necessary to an existing schedule.
          </Typography>

          <Divider />

          <Typography variant="h4" align="center" style={{ marginTop: '200px' }}>
            There are currently no events scheduled.
          </Typography>
        </Paper>

      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(ModifyAnEvent);
