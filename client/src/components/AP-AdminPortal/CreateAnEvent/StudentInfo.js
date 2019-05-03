import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'formik';
import {
  Typography,
  Grid,
  Divider,
} from '@material-ui/core/';

import {
  CheckboxWithLabel,
  TextField,
} from 'formik-material-ui';

import { DateTimePickerField } from '../../Utils/Pickers';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: '790px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px 20px 20px 20px',
  },
  buttons: {
    paddingBottom: '4px',
    marginLeft: '7px',
    paddingTop: '4px',
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
});

class StudentInfo extends Component {
  render() {
    const {
      classes,
      values,
    } = this.props;

    const { event } = values;

    return (
      <>
          <Typography className={classes.text} variant="h5" align="center">
            Student Registrations
          </Typography>
          <Grid xs={12} style={{ paddingTop: '20px' }}>
            <Divider />
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
              <Grid item xs={4}>
                  <Field
                    label="Registration Start Date"
                    name="event.StudentStartDate"
                    component={DateTimePickerField}
                    className={classes.forms}
                  />
              </Grid>
              <Grid item xs={8}>
                  <Field
                    label="Registration End Date"
                    component={DateTimePickerField}
                    name="event.StudentEndDate"
                    className={classes.forms}
                  />
              </Grid>
          </Grid>
          <Grid xs={12} style={{ padding: '10px 0 10px 0' }}>
            <Divider />
          </Grid>
          <Typography variant="h6">
            Options
          </Typography>
          <Grid container align="flex-start" justify="center" direction="column">
            <Field
              name="event.HasCommandPerformance"
              component={CheckboxWithLabel}
              Label={{ label: 'Command Performance' }}
            />
            <Field
              name="event.StudentMultipleLevels"
              component={CheckboxWithLabel}
              Label={{ label: 'Students can select multiple levels' }}
            />
            <Field
              name="event.HasJudging"
              component={CheckboxWithLabel}
              Label={{ label: 'Judging' }}
            />
          </Grid>
          { event.HasCommandPerformance && (
            <>
              <Grid xs={12} style={{ padding: '10px 0 10px 0' }}>
                <Divider />
              </Grid>
              <Typography variant="h6">
                Enter Command Performance Name
              </Typography>
              <Field
                name="event.CommandPerformanceName"
                component={TextField}
                label="Command Performance Name"
                style={{ width: '50%' }}
              />
            </>
          )}
      </>
    );
  }
}

export default withStyles(styles)(StudentInfo);
