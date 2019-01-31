// TODO: FIX NEXT BUTTON WORK CORRECTLY
import React from 'react';
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
} from '@material-ui/core';
import CustomerPortalContainer from '../../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

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
});

class GenerateDocuments extends React.Component {
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
              Document Generation Configurations
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
        <Grid container direction="column" justify="center" alignItems="flex-end">
          <FormGroup>
            <Grid xs={7}>
              <FormControlLabel
                control={
                  <Checkbox checked={adjudication} onChange={this.handleChange('adjudication')} value="adjudication" />
                }
                label="Adjudication Forms"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={results} onChange={this.handleChange('results')} value="results" />
                }
                label="Results Sheets"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={announcing} onChange={this.handleChange('announcing')} value="announcing" />
                }
                label="Announcing Sheets"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={teacherMaster} onChange={this.handleChange('teacherMaster')} value="teacherMaster" />
                }
                label="Teacher Master"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={sessionAssignments} onChange={this.handleChange('sessionAssignments')} value="sessionAssignments" />
                }
                label="Session Assignments"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={room} onChange={this.handleChange('room')} value="room" />
                }
                label="Room Schedules"
              />
            </Grid>
            <Grid xs={7}>
              <FormControlLabel
                control={
                  <Checkbox checked={master} onChange={this.handleChange('master')} value="master" />
                }
                label="Master Schedule"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={simplified} onChange={this.handleChange('simplified')} value="simplified" />
                }
                label="Simplified Schedule"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={teacherList} onChange={this.handleChange('teacherList')} value="teacherList" />
                }
                label="Teacher List"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={theory} onChange={this.handleChange('theory')} value="theory" />
                }
                label="Theory Scores"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={sessionFiles} onChange={this.handleChange('sessionFiles')} value="sessionFiles" />
                }
                label="Session Files"
              />
            </Grid>
          </FormGroup>
        </Grid>
        <Grid item direction="column" justify="center" alignItems="center">
            <Grid xs={8}>
            { activeStep === 1 && <SelectFile /> }
            { /* { activeStep === 1 && <DownloadFiles /> } */}
            { activeStep > 0 && (
              <Button variant="contained" className={classes.button} color="primary" onClick={this.walkBackStep}>
                Go Back
              </Button>
            )}
            <Button variant="contained" className={classes.button} onClick={this.walkStep}>
              Next
            </Button>
            </Grid>
        </Grid>
      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(GenerateDocuments);
