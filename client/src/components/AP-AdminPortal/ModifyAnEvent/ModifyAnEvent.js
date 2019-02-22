import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
} from '@material-ui/core';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = theme => ({
  root: {
    flexGrow: 2,
    width: '75%%',
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
              Edit an Event
          </Typography>
        </div>
        <Paper className={classes.root}>
          <Typography variant="h6" align="center">
              Edit changes as necessary to an existing schedule.
          </Typography>
        </Paper>

      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(ModifyAnEvent);
