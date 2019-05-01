/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import { lighten } from '@material-ui/core/styles/colorManipulator';
import {
  // Table,
  // TableBody,
  // TableCell,
  // TableRow,
  // Toolbar,
  Divider,
  Typography,
  Paper,
  TextField,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  // Radio,
} from '@material-ui/core/';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: '790px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px 20px 20px 20px',
  },
  forms: {
    display: 'block',
    margin: '15px 15px 15px 0px',
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: '#FFFFFF',
    paddingBottom: '15px',
  },
  spacing: {
      marginBottom: '5px',
  },
  // buttonStyle: {
  //   display: 'block',
  //   margin: '15px 15px 15px 0px',
  //   paddingBottom: '0px',
  // },
});

class EventInfo extends Component {
  state = {
  };

  render() {
    const { classes } = this.props;

    return (
            <div>
                <Typography className={classes.text} variant="h5" align="center">
                  Event Information
                </Typography>
                <Grid xs={12} style={{ paddingTop: '20px' }}>
                  <Divider />
                </Grid>

                {/* Begin fields here */}
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  className={classes.eventInfoForm}
                >
                    <Grid xs={12} className={classes.spacing}>
                        <TextField
                          autoFocus
                          required
                          id="event-name"
                          label="Event Name"
                          margin="dense"
                        />
                    </Grid>

                    <Grid container spacing={24}>
                      <Grid item>
                        <TextField
                          label="Event Start Date"
                          type="date"
                          margin="dense"
                          InputLabelProps={{ shrink: true }}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          label="Event End Date"
                          margin="dense"
                          type="date"
                          InputLabelProps={{ shrink: true }}
                          required
                        />
                      </Grid>
                    </Grid>

                    <Grid xs={12}>
                      <TextField
                        label="Festival Chair Email"
                        margin="dense"
                        type="text"
                        required
                      />
                    </Grid>

                    <Grid xs={12} style={{ padding: '10px 0 10px 0' }}>
                      <Divider />
                    </Grid>
                    <Typography variant="h6">
                      Address
                    </Typography>
                    <TextField
                      margin="dense"
                      id="street-address1"
                      label="Street Address"
                      required
                      fullWidth
                    />
                    <TextField
                      margin="dense"
                      id="street-address2"
                      label="Address Line 2"
                      fullWidth
                    />
                    <Grid container spacing={24}>
                      <Grid item xs={8}>
                        <TextField
                          margin="dense"
                          id="city"
                          label="City"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          margin="dense"
                          id="state"
                          label="State"
                          required
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          margin="dense"
                          id="zip-code"
                          label="Postal Code"
                          required
                        />
                      </Grid>
                    </Grid>
                </Grid>
            </div>
    );
  }
}

export default withStyles(styles)(EventInfo);
