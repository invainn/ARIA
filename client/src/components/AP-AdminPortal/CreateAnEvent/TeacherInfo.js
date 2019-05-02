import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'formik';
import {
  Typography,
  TextField,
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
                <div>
                    <Typography variant="h6" align="center">
                        Please enter the information about teacher registrations.
                        All fields are required.
                    </Typography>

                    <Grid xs={12} style={{ paddingTop: '20px' }}>
                      <Divider />
                    </Grid>

                    {/* Begin fields here */}
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                    >
                        <Grid xs={4}>
                            <Field
                              label="Registration Start Date"
                              name="teacherStartDate"
                              component={DateTimePickerField}
                              className={classes.forms}
                            />
                        </Grid>
                        <Grid xs={8}>
                            <Field
                              label="Registration End Date"
                              name="teacherEndDate"
                              component={DateTimePickerField}
                              className={classes.forms}
                            />
                        </Grid>

                        <Grid xs={12}>
                            <Typography>
                                Please select all options within the list.
                            </Typography>
                        </Grid>
                        <Grid xs={11}>
                            <TextField
                              id="teacher-volunteer-options"
                              label="Teacher Volunteer Options"
                              margin="dense"
                              fullWidth
                              required
                              className={classes.forms}
                            />
                        </Grid>

                            <Grid xs={10}>
                              <Typography>
                                  Enter a time range below for volunteer options
                                  for both Saturday and Sunday.
                              </Typography>
                            </Grid>
                            <Grid xs={4}>
                            <TextField
                              label="Saturday Begin Time"
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
                            <Grid xs={8}>
                            <TextField
                              label="Saturday End Time"
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
                            <Grid xs={4}>
                            <TextField
                              label="Sunday Begin Time"
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
                            <Grid xs={8}>
                            <TextField
                              label="Sunday End Time"
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

                    </Grid>
                </div>
    );
  }
}

export default withStyles(styles)(StudentInfo);
