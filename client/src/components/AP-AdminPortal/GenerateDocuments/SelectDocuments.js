import React, { Component } from 'react';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import { lighten } from '@material-ui/core/styles/colorManipulator';
import {
  Divider,
  Typography,
  Paper,
  Grid,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core/';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: '790px',
    minWidth: '790px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px 20px 20px 20px',
  },
  formGroup: {
    width: '100%',
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  forms: {
    display: 'auto',
    margin: '15px 15px 15px 0px',
    alignItems: 'left',
    textAlign: 'left',
    maxWidth: '25%',
    width: '25%',
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

class SelectDocuments extends Component {
  state = {
    adjudication: true,
    results: false,
    announcing: false,
    teacherMaster: true,
    sessionAssignments: false,
    room: true,
    master: false,
    simplified: false,
    teacherList: false,
    theory: true,
    sessionFiles: false,
};

handleChange = formType => ({ event }) => {
    this.setState({ [formType]: event.target.checked });
};

  render() {
    const { classes } = this.props;
    const {
    adjudication,
    results,
    announcing,
    teacherMaster,
    sessionAssignments,
    room,
    master,
    simplified,
    teacherList,
    theory,
    sessionFiles,
  } = this.state;

    return (
            <Paper className={classes.root}>
                <div>
                    <Typography className={classes.text} variant="h6" align="center">
                        Please select the forms you would like to generate.
                    </Typography>
                    { /*
                        ! Fix this on every single other page in existence
                    */ }
                    <Grid xs={12} style={{ paddingTop: '20px' }}>
                      <Divider />
                    </Grid>

                    <div className={classes.formGroup}>
                        <FormControl component="fieldset" className={classes.formGroup}>
                            <FormGroup className={classes.formGroup}>
                                <FormControlLabel
                                  control={
                                        <Checkbox checked={adjudication} onChange={this.handleChange} value="adjudication" />
                                    }
                                  label="Adjudication Forms"
                                  className={classes.forms}
                                />
                                <FormControlLabel
                                  control={
                                        <Checkbox checked={results} onChange={this.handleChange} value="results" />
                                    }
                                  label="Results Sheets"
                                  className={classes.forms}
                                />
                                <FormControlLabel
                                  control={
                                        <Checkbox checked={announcing} onChange={this.handleChange} value="announcing" />
                                    }
                                  label="Announcing Sheets"
                                  className={classes.forms}
                                />
                                <FormControlLabel
                                  control={
                                        <Checkbox checked={teacherMaster} onChange={this.handleChange} value="teacherMaster" />
                                }
                                  label="Teacher Master"
                                  className={classes.forms}
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={sessionAssignments} onChange={this.handleChange} value="sessionAssignments" />
                                }
                                  label="Session Assignments"
                                  className={classes.forms}
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={room} onChange={this.handleChange} value="room" />
                                }
                                  label="Room Schedules"
                                  className={classes.forms}
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={master} onChange={this.handleChange} value="master" />
                                }
                                  label="Master Schedule"
                                  className={classes.forms}
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={simplified} onChange={this.handleChange} value="simplified" />
                                }
                                  label="Simplified Schedule"
                                  className={classes.forms}
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={teacherList} onChange={this.handleChange} value="teacherList" />
                                }
                                  label="Teacher List"
                                  className={classes.forms}
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={theory} onChange={this.handleChange} value="theory" />
                                }
                                  label="Theory Scores"
                                  className={classes.forms}
                                />
                                <FormControlLabel
                                  control={
                                    <Checkbox checked={sessionFiles} onChange={this.handleChange} value="sessionFiles" />
                                }
                                  label="Session Files"
                                  className={classes.forms}
                                />
                            </FormGroup>
                        </FormControl>
                    </div>
                </div>
            </Paper>
    );
  }
}

export default withStyles(styles)(SelectDocuments);
