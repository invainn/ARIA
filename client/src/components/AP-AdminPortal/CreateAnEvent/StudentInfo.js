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
      value: 'true',
      value2: 'true',
      value3: 'false',
  };

  handleRadioChange1 = (event) => {
    this.setState({ value: event.target.value });
  };

  handleRadioChange2 = (event) => {
    this.setState({ value2: event.target.value });
  };

  handleRadioChange3 = (event) => {
    this.setState({ value3: event.target.value });
  };

  render() {
    const {
      classes,
    } = this.props;

    const {
      value,
      value2,
      value3,
    } = this.state;

    return (
            <Paper className={classes.root}>
                <div>
                    <Typography className={classes.text} variant="h6">
                        Please enter the information about student registrations.
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

                        { /*
                            ? Someone help
                             TODO: Add the option to name the command performance
                        */ }
                        <Grid xs={12} className={classes.spacing} style={{ marginLeft: '7px' }}>
                          <Typography>
                            Will there be a command performance for this event?
                          </Typography>
                        </Grid>
                        <Grid xs={12} className={classes.spacing} />
                            <FormControl component="fieldset" className={classes.buttons}>
                                <RadioGroup
                                  aria-label="performance-answer1"
                                  name="answer1"
                                  className={classes.forms}
                                  value={value}
                                  onChange={this.handleRadioChange1}
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>

                        <Grid xs={12} className={classes.spacing} style={{ marginLeft: '7px' }}>
                          <Typography>
                            Can a student register for multiple categories / levels?
                          </Typography>
                        </Grid>
                        <Grid xs={12} className={classes.spacing} />
                            <FormControl component="fieldset" className={classes.buttons}>
                                <RadioGroup
                                  aria-label="performance-answer2"
                                  name="answer2"
                                  className={classes.forms}
                                  value={value2}
                                  onChange={this.handleRadioChange2}
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>

                        <Grid xs={12} className={classes.spacing} style={{ marginLeft: '7px' }}>
                          <Typography>
                            Will this event require scores?
                          </Typography>
                        </Grid>
                        <Grid xs={12} className={classes.spacing} />
                            <FormControl component="fieldset" className={classes.buttons}>
                                <RadioGroup
                                  aria-label="performance-answer3"
                                  name="answer3"
                                  className={classes.forms}
                                  value={value3}
                                  onChange={this.handleRadioChange3}
                                >
                                    <FormControlLabel value="true" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="false" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>

                    </Grid>
                </div>
            </Paper>
    );
  }
}

export default withStyles(styles)(StudentInfo);
