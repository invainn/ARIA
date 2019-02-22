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

import SelectEvent from './SelectAnEvent';
import SelectParticipants from './SelectParticipants';
import CommandPerformance from './CommandPerformance';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = ({ palette }) => ({
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
        textDecorationColor: (palette.type === 'light') ? '#000000' : '#FFFFFF',
        paddingBottom: '15px',
    },
    registerStepper: {
        borderRadius: '5px',
    },
});

class RegisterForAnEvent extends Component {
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
                        Register for an Event
                    </Typography>
                </div>
                <Grid container alignItems="center" justify="center">
                    <Grid item className={classes.eventGridItem}>
                        <Stepper activeStep={activeStep} className={classes.registerStepper}>
                        {[
                            'Select Event',
                            'Select Participants',
                            'Command Performance Options',
                            'Review/Edit Order',
                            'Payment',
                            'Order Details',
                        ].map(item => (
                                <Step>
                                    <StepLabel>{item}</StepLabel>
                                </Step>
                        ))}
                        </Stepper>
                    </Grid>
                    <Grid item className={classes.eventRegistrationField}>
                        { activeStep === 0 && <SelectEvent /> }
                        { activeStep === 1 && <SelectParticipants /> }
                        { activeStep === 2 && <CommandPerformance /> }
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
                        <Button variant="contained" className={classes.eventRegistrationButton} color="primary" onClick={this.walkStep.bind(this)}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </CustomerPortalContainer>
        );
    }
}

export default withStyles(styles)(RegisterForAnEvent);
