import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stepper,
  Step,
  StepLabel,
  Paper,
  // FormControl,
} from '@material-ui/core';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

import SelectFile from './SelectFile';

const styles = theme => ({
  root: {
    flexGrow: 2,
    width: '75%%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
  },
  documentPaper: {
    marginTop: 5,
    textAlign: 'center',
    width: '70%',
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: '#FFFFFF',
    paddingBottom: '15px',
  },
  group: {
    margin: '$(theme.spacing.unit)px 0',
  },
  documentStepper: {
    borderRadius: '5px',
  },
  gridItems: {
    marginLeft: 7,
  },
  button: {
    marginBottom: 5,
  },
});

class GenerateDocuments extends Component {
  state = {
      adjudication: false,
      results: false,
      announcing: false,
      teacherMaster: false,
      sessionAssignments: false,
      room: false,
      master: false,
      simplified: false,
      teacherList: false,
      theory: false,
      sessionFiles: false,
      activeStep: 0,
  };

  handleChange = form => ({ event }) => {
    this.setState({ [form]: event.target.checked });
  };

  walkStep() {
    this.setState(({ activeStep }) => ({ activeStep: activeStep + 1 }));
  }

  walkBackStep() {
    this.setState(({ activeStep }) => ({ activeStep: activeStep - 1 }));
}

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
      activeStep,
    } = this.state;

    return (
      <CustomerPortalContainer userType={0}>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              Generate Documents
          </Typography>
        </div>
        <Stepper activeStep={activeStep} className={classes.documentStepper}>
        {[
          'Select Documents',
          'Select File Type',
          'Generate Documents',
        ].map(item => (
          <Step>
            <StepLabel>{item}</StepLabel>
          </Step>
        ))}
        </Stepper>

        <div>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Paper className={classes.documentPaper}>
              <Grid
                container
                spacing={24}
                justify="space-evenly"
                alignItems="center"
                direction="row"
              >
                <Grid item xs={3} className={classes.gridItems}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={adjudication} onChange={this.handleChange('adjudication')} value="adjudication" />
                      }
                      label="Adjudication Forms"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={results} onChange={this.handleChange('results')} value="results" />
                      }
                      label="Results Sheets"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={announcing} onChange={this.handleChange('announcing')} value="announcing" />
                      }
                      label="Announcing Sheets"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={24}
                justify="space-evenly"
                alignItems="center"
                direction="row"
              >
                <Grid item xs={3} className={classes.gridItems}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={teacherMaster} onChange={this.handleChange('teacherMaster')} value="teacherMaster" />
                      }
                      label="Teacher Master"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={sessionAssignments} onChange={this.handleChange('sessionAssignments')} value="sessionAssignments" />
                      }
                      label="Session Assignments"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={room} onChange={this.handleChange('room')} value="room" />
                      }
                      label="Room Schedules"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={24}
                justify="space-evenly"
                alignItems="center"
                direction="row"
              >
                <Grid item xs={3} className={classes.gridItems}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={master} onChange={this.handleChange('master')} value="master" />
                      }
                      label="Master Schedule"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={simplified} onChange={this.handleChange('simplified')} value="simplified" />
                      }
                      label="Simplified Schedule"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={teacherList} onChange={this.handleChange('teacherList')} value="teacherList" />
                      }
                      label="Teacher List"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={24}
                justify="space-evenly"
                alignItems="center"
                direction="row"
              >
                <Grid item xs={3} className={classes.gridItems}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={theory} onChange={this.handleChange('theory')} value="theory" />
                      }
                      label="Theory Scores"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={sessionFiles} onChange={this.handleChange('sessionFiles')} value="sessionFiles" />
                      }
                      label="Session Files"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={3} />
              </Grid>
              <Grid
                container
                spacing={24}
                justify="space-evenly"
                alignItems="center"
                direction="row"
              >
                <Grid item xs={10} />
                <Grid item xs={1}>
                  { activeStep === 1 && <SelectFile /> }
                  { /* { activeStep === 1 &&& <DownloadFiles /> } */ }
                  { activeStep > 0 && (
                    <Button variant="contained" className={classes.button} color="primary" onClick="this.walkBackStep">
                      Go Back
                    </Button>
                  )}
                  <Button variant="contained" className={classes.button} onClick={this.walkStep}>
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </div>
      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(GenerateDocuments);
