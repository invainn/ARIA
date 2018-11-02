import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Grid,
    Step,
    StepLabel,
    Button,
    Divider,
} from '@material-ui/core';

import AccountFields from './AccountFields/AccountFields';
import CustomerPortalContainer from '../../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

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

EventRegistration.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(EventRegistration);
