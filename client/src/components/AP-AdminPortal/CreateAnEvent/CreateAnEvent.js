import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Icon,
  TextField,
  Button,
  Paper,
  Typography,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountFields from './AccountFields/AccountFields';
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
  formButton: {
    marginLeft: 7,
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
  document: {
    marginTop: 5,
  },
  spacing: {
    marginBottom: '10px',
  },
  forms: {
    marginLeft: 7,
  },
});

class CreateAnEvent extends Component {
  state = {
    open: false,
    value: 'no',
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
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
      <CustomerPortalContainer userType={0}>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              Create an Event
          </Typography>
        </div>
        <Paper className={classes.root}>
          <Typography variant="h6" align="center">
              Welcome! Please enter the information required below to create a
              new NNMTA event!
          </Typography>
        </Paper>

    {/* <TabContainer> */}
        <Paper className={classes.document}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid xs={12} className={classes.spacing}>
              <AccountFields label="Event Name*" placeholder="Desired event name" />
            </Grid>
            <Grid xs={2} className={classes.spacing}>
              <TextField label="Event Start Date" type="date" InputLabelProps={{ shrink: true }} className={classes.forms} />
            </Grid>
            <Grid xs={10} className={classes.spacing}>
              <TextField label="Event End Date" type="date" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid xs={12} className={classes.spacing}>
              <Button variant="contained" color="primary" onClick={this.handleClickOpen} className={classes.formButton}>
                Event Location
              </Button>
              <Dialog
                // eslint-disable-next-line react/destructuring-assignment
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="address-location-form"
              >
                <DialogTitle id="address-location-form">Address Location Details</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please enter all of the information.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="street-address1"
                    label="Street Address"
                    required
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="street-address2"
                    label="Address Line 2"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="city"
                    label="City"
                    required
                    style={{ paddingRight: '20px' }}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="state"
                    label="State / Province / Region"
                    required
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="zip-code"
                    label="ZIP / Postal Code"
                    style={{ paddingRight: '20px' }}
                    required
                  />
                  <TextField
                    autoFocus
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
            <Grid xs={2} className={classes.spacing}>
              <TextField label="Student Registration Start Date" type="date" InputLabelProps={{ shrink: true }} className={classes.forms} />
            </Grid>
            <Grid xs={10} className={classes.spacing}>
              <TextField label="Student Registration End Date" type="date" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid xs={2} className={classes.spacing}>
              <TextField label="Teacher Registration Start Date" type="date" InputLabelProps={{ shrink: true }} className={classes.forms} />
            </Grid>
            <Grid xs={10} className={classes.spacing}>
              <TextField label="Teacher Registration End Date" type="date" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid xs={11} className={classes.spacing}>
              <TextField
                id="teacher-volunteer-options"
                label="Teacher Volunteer Options"
                margin="dense"
                fullWidth
                required
                className={classes.forms}
              />
            </Grid>

            <Grid xs={10} className={classes.spacing} style={{ marginLeft: 7, marginTop: 20 }}>
              <Typography>
                Enter a time range below for volunteer options for both Saturday and Sunday
              </Typography>
            </Grid>
            <Grid xs={2} className={classes.spacing}>
              <TextField
                label="Saturday #1"
                type="time"
                defaultValue="15:00"
                className={classes.forms}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
              />
            </Grid>
            <Grid xs={10} className={classes.spacing}>
              <TextField
                label="Saturday #2"
                type="time"
                defaultValue="19:00"
                className={classes.forms}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
              />
            </Grid>
            <Grid xs={2} className={classes.spacing}>
              <TextField
                label="Sunday #1"
                type="time"
                defaultValue="16:00"
                className={classes.forms}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
              />
            </Grid>
            <Grid xs={10} className={classes.spacing}>
              <TextField
                label="Sunday #2"
                type="time"
                defaultValue="20:00"
                className={classes.forms}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
              />
            </Grid>

            <Grid xs={10} className={classes.spacing} style={{ marginLeft: 7, marginTop: 20 }}>
              <Typography>
                Enter a time range below for comannd performance options for when participants
                are registering.
              </Typography>
            </Grid>
            <Grid xs={2} className={classes.spacing}>
              <TextField
                label="Command Perf. Date"
                type="date"
                className={classes.forms}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid xs={10} className={classes.spacing}>
              <TextField
                label="Perf. Time"
                type="time"
                defaultValue="19:00"
                className={classes.forms}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
              />
            </Grid>

            <Grid xs={10} className={classes.spacing} style={{ marginLeft: 7, marginTop: 20 }}>
              <Typography>
                Will there be master class sections for this event?
              </Typography>
            </Grid>
            <Grid xs={12} className={classes.spacing}>
              <RadioGroup
                aria-label="Answer"
                // eslint-disable-next-line react/destructuring-assignment
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" className={classes.forms} />
                <FormControlLabel value="no" control={<Radio />} label="No" className={classes.forms} />
              </RadioGroup>
            </Grid>

            <Grid xs={10} className={classes.spacing}>
              <TextField
                label="Pricing"
                className={classes.forms}
                fullWidth
              />
            </Grid>

            <Grid xs={12}>
              <FormHelperText className={classes.forms}>
                *Save your preferences below for them to take effect
              </FormHelperText>
            </Grid>
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
          </Grid>
        </Paper>
        {/* </TabContainer> */}
      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(CreateAnEvent);
