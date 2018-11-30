import React, { Component } from 'react';
import {
    Stepper,
    Grid,
    Step,
    StepLabel,
    Button,
    Divider,
    Typography,
    withStyles,
} from '@material-ui/core';

import AccountFields from '../Account/AccountFields/AccountFields';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

const styles = {
    eventRegistrationField: {
        padding: '10px',
        width: '80%',
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
        textDecorationColor: '#FFFFFF',
        paddingBottom: '15px',
      },
};

class EventRegistration extends Component {
    state = {
        activeStep: 0,
    };

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
                        <Stepper activeStep={activeStep}>
                        {[
                            'Register Student',
                            'Additional Information',
                            'Payment Information',
                            'Confirmation',
                        ].map(item => (
                                <Step>
                                    <StepLabel>{item}</StepLabel>
                                </Step>
                        ))}
                        </Stepper>
                    </Grid>
                    <Grid item className={classes.eventRegistrationField}>
                        <AccountFields label="First Name" placeholder="Student's First Name" />
                        <AccountFields label="Last Name" placeholder="Student's Last Name" />
                        <Divider className={classes.eventDividerPadding} />
                        <AccountFields label="City" placeholder="Enter your city here" />
                        <AccountFields label="State/Province/Region" placeholder="Enter your state/province/region here" />
                        <AccountFields label="Zip Code" placeholder="Enter your zip code here" />
                        <Button variant="contained" className={classes.eventRegistrationButton} color="primary">
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </CustomerPortalContainer>
        );
    }
}

export default withStyles(styles)(EventRegistration);
