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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
            <Paper className={classes.root}>
                <div>
                    <Typography className={classes.text} variant="h6" align="center">
                        Please enter the information about general event information.
                        All fields are required.
                    </Typography>
                    <Grid xs={12}>
                      <Divider />
                    </Grid>

                    {/* Begin fields here */}
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                    >
                        <Grid xs={12} className={classes.spacing}>
                            <TextField
                              autoFocus
                              required
                              id="event-name"
                              label="Event Name"
                              className={classes.forms}
                              margin="dense"
                            />
                        </Grid>

                        <Grid xs={4} className={classes.spacing}>
                            <TextField
                              label="Event Start Date"
                              type="date"
                              InputLabelProps={{ shrink: true }}
                              className={classes.forms}
                            />
                        </Grid>
                        <Grid xs={8} className={classes.spacing}>
                            <TextField
                              label="Event End Date"
                              type="date"
                              InputLabelProps={{ shrink: true }}
                              className={classes.forms}
                            />
                        </Grid>

                        <Grid xs={12} className={classes.spacing}>
                          <Typography>
                            Click the button to enter event location details.
                          </Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={this.handleClickOpen}
                              className={classes.forms}
                            >
                                Event Location
                            </Button>
                            <Dialog
                              // eslint-disable-next-line react/destructuring-assignment
                              open={this.state.open}
                              onClose={this.handleClose}
                              // eslint-disable-next-line jsx-a11y/aria-props
                              aria-labeledby="address-location-form"
                            >
                             <DialogTitle id="address-location-form">
                              Address Location Details
                             </DialogTitle>
                             <DialogContent>
                               <DialogContentText>
                                 Please enter all of the requested information.
                               </DialogContentText>
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
                                <TextField
                                  margin="dense"
                                  id="city"
                                  label="City"
                                  required
                                  style={{ paddingRight: '20px' }}
                                />
                                <TextField
                                  margin="dense"
                                  id="state"
                                  label="State / Province / Region"
                                  required
                                />
                                <TextField
                                  margin="dense"
                                  id="zip-code"
                                  label="ZIP / Postal Code"
                                  style={{ paddingRight: '20px' }}
                                  required
                                />
                                <TextField
                                  margin="dense"
                                  id="country"
                                  label="Country"
                                  required
                                />
                             </DialogContent>
                             <DialogActions>
                               <Button onClick={this.handleClose} color="primary">
                                Cancel
                               </Button>
                               <Button onClick={this.handleClose} color="primary">
                                Continue
                               </Button>
                             </DialogActions>
                            </Dialog>
                        </Grid>

                    </Grid>
                </div>
            </Paper>
    );
  }
}

export default withStyles(styles)(EventInfo);
