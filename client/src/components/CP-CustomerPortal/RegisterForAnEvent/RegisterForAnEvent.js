/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import React, { Component } from 'react';
import axios from 'axios';
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
    CircularProgress,
} from '@material-ui/core';

import EventPayment from './EventPayment';
import SelectEvent from './SelectAnEvent';
import SelectParticipants from './SelectParticipants';
import CommandPerformance from './CommandPerformance';
import OrderDetails from './OrderDetails';
import ReviewOrder from './ReviewOrder';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

import ARIA_SERVER_URL from '../../../config';

const styles = theme => ({
    eventRegistrationField: {
    },
    eventRegistrationComponents: {
    },

    eventRegistrationComponent: {
    },

    eventRegistrationContainer: {
    },

    eventRegistrationButton: {
        margin: '8px 8px 8px 0',
    },

    evenRegistrationButtons: {
    },

    eventGridItem: {
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
    },
    divider: {
        marginBottom: '10px',
    },
});

class RegisterForAnEvent extends Component {
    state = {
        activeStep: 0,
        students: [],
        event: null,
        clientToken: null,
        transactionDetails: {},
        orderPlaceDisabled: false,
        totalPrice: 0,
    };

    handleStudents = (newStudents) => {
        this.setState({ students: newStudents });
    };

    handleEvent = (selectedEvent) => {
        // Price will be calculated after event is selected
        // This will be retrieved from the database on some kind of price table?
        // We get the price according to level of student and event selected.
        const price = 9.99;

        this.setState(({ students }) => ({
            event: selectedEvent,
            totalPrice: price * students.length,
        }));
    };

    handleClientToken = (newClientToken) => {
        this.setState({ clientToken: newClientToken });
    };

    handlePayment = async () => {
        if (!this.child.instance.isPaymentMethodRequestable()) {
            return;
        }

        this.setState({ orderPlaceDisabled: true });

        const { nonce, type } = await this.child.instance.requestPaymentMethod();
        const { totalPrice } = this.state;

        let transaction = null;

        if (type === 'PayPalAccount') {
            transaction = await axios.post(`${ARIA_SERVER_URL}/payment`, { nonce, price: totalPrice }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            });
        } else {
            transaction = await axios.post(`${ARIA_SERVER_URL}/payment/paypal`, { nonce, price: totalPrice }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                },
            });
        }

        this.setState({ transactionDetails: transaction.data });
        this.walkStep();
    }

    renderNextButton = (classes, disabled) => (
        <Button variant="contained" className={classes.eventRegistrationButton} color="primary" onClick={this.walkStep.bind(this)} disabled={disabled}>
            Next
        </Button>
    );

    walkStep() {
        this.setState(({ activeStep }) => ({ activeStep: activeStep + 1 }));
    }

    walkBackStep() {
        this.setState(({ activeStep }) => ({ activeStep: activeStep - 1 }));
    }

    render() {
        const { classes } = this.props;
        const {
            activeStep,
            clientToken,
            orderPlaceDisabled,
            students,
            event,
            transactionDetails,
            totalPrice,
        } = this.state;

        return (
            <CustomerPortalContainer>
                <div className={classes.pageTitle}>
                    <Typography component="h2" variant="h2" gutterBottom align="center">
                        Register for an Event
                    </Typography>
                </div>
                <Grid container alignItems="center" className={classes.eventRegistrationContainer} direction="column" wrap="nowrap">
                <Paper>
                    <Grid item className={classes.eventGridItem}>
                        <Stepper activeStep={activeStep} className={classes.registerStepper}>
                        {[
                            'Select Participants',
                            'Select Event',
                            'Command Performance Options',
                            'Review Order',
                            'Payment',
                            'Order Details',
                        ].map(item => (
                            <Step>
                                <StepLabel>{item}</StepLabel>
                            </Step>
                        ))}
                        </Stepper>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid className={classes.eventRegistrationField}>
                        <Grid container justify="center" alignContent="center" className={classes.eventRegistrationComponents}>
                            { activeStep === 0 && <SelectParticipants handleStudents={this.handleStudents.bind(this)} /> }
                            { activeStep === 1 && <SelectEvent handleEvent={this.handleEvent.bind(this)} /> }
                            { activeStep === 2 && <CommandPerformance /> }
                            { activeStep === 3 && <ReviewOrder totalPrice={totalPrice} students={students} event={event} /> }
                            { activeStep === 4 && (
                                <EventPayment
                                  totalPrice={totalPrice}
                                  clientToken={clientToken}
                                  handleClientToken={this.handleClientToken.bind(this)}
                                  // eslint-disable-next-line no-return-assign
                                  innerRef={(node) => {
                                      this.child = node;
                                  }}
                                />
                            )}
                            { activeStep === 5 && <OrderDetails transactionDetails={transactionDetails} totalPrice={totalPrice} students={students} event={event} /> }
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-end" className={classes.eventRegistrationButtons}>
                        { activeStep === 0 && this.renderNextButton(classes, students.length === 0) }
                        { activeStep === 1 && this.renderNextButton(classes, event === null) }
                        { activeStep === 2 && this.renderNextButton(classes) }
                        { activeStep === 3 && this.renderNextButton(classes) }
                        { activeStep === 4 && (
                            <Button variant="contained" className={classes.eventRegistrationButton} color="primary" onClick={this.handlePayment} disabled={orderPlaceDisabled}>
                                { (!orderPlaceDisabled) ? 'Place Order' : <CircularProgress size={20} /> }
                            </Button>
                        )}
                    </Grid>
                </Paper>
                </Grid>
            </CustomerPortalContainer>
        );
    }
}

export default withStyles(styles)(RegisterForAnEvent);
