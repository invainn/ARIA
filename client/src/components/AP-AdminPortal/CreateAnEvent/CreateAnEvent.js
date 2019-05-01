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
    Paper,
    Divider,
} from '@material-ui/core';

import EventInfo from './EventInfo';
import StudentInfo from './StudentInfo';
import TeacherInfo from './TeacherInfo';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = theme => ({
    eventRegistrationField: {
        padding: '10px',
        width: '90%',
        maxWidth: '790px',
    },
    eventRegistrationButton: {
        padding: '10px 5px 5px 0',
    },

    eventGridItem: {
        width: '100%',
    },

    eventDividerPadding: {
        margin: '15px 0 5px 0',
    },
    pageTitle: {
        width: '100%',
        textDecoration: 'underline',
        textDecorationColor: (theme.palette.type === 'light') ? '#000000' : '#FFFFFF',
        paddingBottom: '15px',
    },
    registerStepper: {
        borderRadius: '5px',
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
            <CustomerPortalContainer userType={2}>
                <div className={classes.pageTitle}>
                    <Typography component="h2" variant="h2" gutterBottom align="center">
                        Create an Event
                    </Typography>
                </div>
                <Grid container alignItems="center" justify="center">
                    <Grid component={Paper} item className={classes.eventRegistrationField}>
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
                        <Divider className={classes.eventDividerPadding} />
                        <Grid container justify="flex-end">
                            { activeStep > 0 && (
                                <Grid item className={classes.eventRegistrationButton}>
                                    <Button variant="contained" color="primary" onClick={this.walkBackStep.bind(this)}>
                                        Go Back
                                    </Button>
                                </Grid>
                            )}
                            {

                            }
                            { /*
                                TODO: Fix the styling so that the buttons are WITHIN the paper of the elements
                                TODO:   as well as taking out the static inline styling below.
                            */ }
                            <Grid item className={classes.eventRegistrationButton}>
                                <Button variant="contained" color="primary" onClick={this.walkStep.bind(this)}>
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CustomerPortalContainer>
        );
    }
}

export default withStyles(styles)(CreateAnEvent);
