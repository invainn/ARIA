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
  Typography,
  Paper,
  TextField,
  Grid,
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
} from '@material-ui/core/';

const styles = () => ({
  root: {
    width: '100%',
  },
  text: {
    paddingTop: '7px',
    paddingLeft: '10px',
    paddingBottom: '7px',
  },
  buttons: {
    paddingBottom: '4px',
    marginLeft: '7px',
    paddingTop: '4px',
  },
  forms: {
    paddingTop: '4px',
    marginLeft: '7px',
    paddingBottom: '15px',
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

class StudentInfo extends Component {
  state = {
  };

  render() {
    const { classes } = this.props;

    return (
            <Paper className={classes.root}>
                <div>
                    <Typography className={classes.text} variant="h6">
                        Please enter the information about teacher registrations.
                        All fields are required.
                    </Typography>

                    {/* Begin fields here */}
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                    >
                        <Grid xs={2} className={classes.spacing}>
                            <TextField
                              autoFocus
                              label="Registration Start Date"
                              type="date"
                              InputLabelProps={{ shrink: true }}
                              className={classes.forms}
                            />
                        </Grid>
                        <Grid xs={10} className={classes.spacing}>
                            <TextField
                              label="Registration End Date"
                              type="date"
                              InputLabelProps={{ shrink: true }}
                              className={classes.forms}
                            />
                        </Grid>

                        <Grid xs={12} style={{ marginLeft: '7px', paddingTop: '15px' }}>
                            <Typography>
                                Please select all options within the list.
                            </Typography>
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

                            <Grid
                              xs={10}
                              className={classes.spacing}
                              style={{ marginLeft: 7, marginTop: 20 }}
                            >
                            <Typography>
                                Enter a time range below for volunteer options
                                for both Saturday and Sunday
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

                    </Grid>
                </div>
            </Paper>
    );
  }
}

export default withStyles(styles)(StudentInfo);
