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
  Divider,
} from '@material-ui/core/';

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
                <div>
                    <Typography className={classes.text} variant="h6" align="center">
                        Please enter the information about student registrations.
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
                        <Grid item xs={4}>
                            <TextField
                              autoFocus
                              label="Registration Start Date"
                              type="date"
                              InputLabelProps={{ shrink: true }}
                              className={classes.forms}
                            />
                        </Grid>
                        <Grid item xs={8}>
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
                        <Grid xs={12}>
                          <Typography>
                            Will there be a command performance for this event?
                          </Typography>
                        </Grid>
                        <Grid xs={12} />
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

                        <Grid xs={12}>
                          <Typography>
                            Can a student register for multiple categories / levels?
                          </Typography>
                        </Grid>
                        <Grid xs={12} />
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

                        <Grid xs={12}>
                          <Typography>
                            Will this event require scores?
                          </Typography>
                        </Grid>
                        <Grid xs={12} />
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
    );
  }
}

export default withStyles(styles)(StudentInfo);
