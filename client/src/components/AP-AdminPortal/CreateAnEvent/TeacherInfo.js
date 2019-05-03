import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'formik';
import {
  Typography,
  Divider,
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
  state = {
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Typography variant="h5" align="center">
          Teacher Registrations
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
            <Grid xs={4}>
                <Field
                  label="Registration Start Date"
                  name="event.TeacherStartDate"
                  component={DateTimePickerField}
                  className={classes.forms}
                />
            </Grid>
            <Grid xs={8}>
                <Field
                  label="Registration End Date"
                  name="event.TeacherEndDate"
                  component={DateTimePickerField}
                  className={classes.forms}
                />
            </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(StudentInfo);
