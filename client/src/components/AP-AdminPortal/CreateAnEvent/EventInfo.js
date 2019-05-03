import React, { Component } from 'react';
import {
  Field,
} from 'formik';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from 'formik-material-ui';
import {
  Divider,
  Typography,
  Grid,
} from '@material-ui/core/';
import { DateTimePickerField } from '../../Utils/Pickers';

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
});

class EventInfo extends Component {
  state = {
  };

  render() {
    const {
      classes,
    } = this.props;

    return (
      <>
        <Typography className={classes.text} variant="h5" align="center">
          Event Information
        </Typography>
        <Grid xs={12} style={{ paddingTop: '20px' }}>
          <Divider />
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.eventInfoForm}
        >
            <Grid xs={12} className={classes.spacing}>
                <Field
                  component={TextField}
                  name="event.Name"
                  label="Event Name"
                  margin="dense"
                  fullWidth
                />
            </Grid>

            <Grid container spacing={24}>
              <Grid item>
                <Field
                  name="event.StartDate"
                  component={DateTimePickerField}
                  label="Event Start Date"
                />
              </Grid>
              <Grid item>
                <Field
                  name="event.EndDate"
                  component={DateTimePickerField}
                  label="Event End Date"
                />
              </Grid>
            </Grid>

            <Field
              component={TextField}
              label="Festival Chair Email"
              name="event.ChairEmail"
              fullWidth
            />

            <Grid xs={12} style={{ padding: '10px 0 10px 0' }}>
              <Divider />
            </Grid>
            <Typography variant="h6">
              Address
            </Typography>
            <Field
              component={TextField}
              margin="dense"
              label="Street Address"
              name="event.Address"
              fullWidth
            />
            <Grid container spacing={24}>
              <Grid item xs={8}>
                <Field
                  component={TextField}
                  margin="dense"
                  label="City"
                  name="event.City"
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Field
                  component={TextField}
                  margin="dense"
                  name="event.State"
                  label="State"
                />
              </Grid>
              <Grid item xs={2}>
                <Field
                  component={TextField}
                  margin="dense"
                  name="event.Zipcode"
                  label="Zip Code"
                />
              </Grid>
            </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(EventInfo);
