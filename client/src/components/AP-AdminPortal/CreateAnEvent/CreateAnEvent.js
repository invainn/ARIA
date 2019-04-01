/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Grid,
    Step,
    StepLabel,
    Typography,
    Button,
} from '@material-ui/core';

import EventInfo from './EventInfo';
import StudentInfo from './StudentInfo';
import TeacherInfo from './TeacherInfo';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = theme => ({
    eventRegistrationField: {
        padding: '10px',
        width: '90%',
    },
    eventRegistrationButton: {
        margin: '8px',
    },

    eventGridItem: {
        width: '100%',
    },

    eventDividerPadding: {
        margin: '5px',
    },
    pageTitle: {
        width: '100%',
        textDecoration: 'underline',
        textDecorationColor: (theme.palette.type === 'light') ? '#000000' : '#FFFFFF',
        paddingBottom: '15px',
    },
    registerStepper: {
        borderRadius: '5px',
        width: '100%',
        maxWidth: '790px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px 20px 20px 20px',
    },
});

class CreateAnEvent extends Component {
    state = {
        activeStep: 0,
    };

    walkStep() {
        this.setState(({ activeStep }) => ({ activeStep: activeStep + 1 }));
    }

    walkBackStep() {
        this.setState(({ activeStep }) => ({ activeStep: activeStep - 1 }));
    }

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <CustomerPortalContainer>
                <div className={classes.pageTitle}>
                    <Typography component="h2" variant="h2" gutterBottom align="center">
                        Create an Event
                    </Typography>
                </div>
                <Grid container alignItems="center" justify="center">
                    <Grid item className={classes.eventGridItem}>
                        <Stepper activeStep={activeStep} className={classes.registerStepper}>
                        {[
                            'Event Information',
                            'Student Registrations',
                            'Teacher Registrations',
                        ].map(item => (
                                <Step>
                                    <StepLabel>{item}</StepLabel>
                                </Step>
                        ))}
                        </Stepper>
                    </Grid>
                    <Grid item className={classes.eventRegistrationField}>
                        { activeStep === 0 && <EventInfo /> }
                        { activeStep === 1 && <StudentInfo /> }
                        { activeStep === 2 && <TeacherInfo /> }
                        {/* <AccountFields label="First Name" placeholder="Student's First Name" />
                        <AccountFields label="Last Name" placeholder="Student's Last Name" />
                        <Divider className={classes.eventDividerPadding} />
                        <AccountFields label="City" placeholder="Enter your city here" />
                        <AccountFields label="State/Province/Region" placeholder="Enter your state/province/region here" />
                        <AccountFields label="Zip Code" placeholder="Enter your zip code here" />
                        */}
                        { activeStep > 0 && (
                            <Button variant="contained" className={classes.eventRegistrationButton} color="primary" onClick={this.walkBackStep.bind(this)}>
                                Go Back
                            </Button>
                        )}
                        {

                        }
                        <Button variant="contained" className={classes.eventRegistrationButton} color="primary" onClick={this.walkStep.bind(this)}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </CustomerPortalContainer>
        );
    }
}

export default withStyles(styles)(CreateAnEvent);
