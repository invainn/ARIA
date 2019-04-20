/**
 * TODO: This page requires event creation to actually work
 */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Divider,
  Grid,
} from '@material-ui/core';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: '720px',
    maxHeight: '450px',
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

class ScheduleCommandPerformance extends Component {
  state = {
  };

  handleChange = () => {
    this.setState({});
  };

  render() {
    const { classes } = this.props;

    return (
      <CustomerPortalContainer userType={2}>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              Schedule Command Performance
          </Typography>
        </div>
        <Paper className={classes.root}>
          <Typography variant="h6" align="center">
              Enter details about the command performance for a selected event.
          </Typography>

          <Grid xs={12} style={{ paddingTop: '20px' }}>
            <Divider />
          </Grid>

          <Typography variant="h4" align="center" style={{ marginTop: '150px' }}>
            There are currently no events scheduled to choose from.
          </Typography>
        </Paper>

      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(ScheduleCommandPerformance);
