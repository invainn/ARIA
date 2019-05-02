/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import {
    Formik,
    Form,
} from 'formik';
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

const pages = [EventInfo, StudentInfo, TeacherInfo];

// Validation Schema
const CreateEventSchema = Yup.object().shape({
    eventName: Yup.string().required('Required'),
    eventStartDate: Yup.date().required('Required'),
    eventEndDate: Yup.date().required('Required'),
    eventAddress: Yup.string().required('Required'),
    eventChairEmail: Yup.string().email('Invalid Email').required('Required'),
    eventCity: Yup.string().required('Required'),
    eventState: Yup.string().required('Required'),
    eventZipcode: Yup.number('Must be a number').required('Required'),
    studentStartDate: Yup.date().required('Required'),
    studentEndDate: Yup.date().required('Required'),
});

class CreateAnEvent extends Component {
    state = {
        activeStep: 0,
    };

    initialValues = {
        eventName: '',
        eventStartDate: new Date(),
        eventEndDate: new Date(),
        eventAddress: '',
        eventChairEmail: '',
        eventCity: '',
        eventState: '',
        eventZipcode: '',
        studentStartDate: new Date(),
        studentEndDate: new Date(),
        teacherStartDate: new Date(),
        teacherEndDate: new Date(),
    };

    onSubmit = () => {};

    walkStep() {
        this.setState(({ activeStep }) => ({ activeStep: activeStep + 1 }));
    }

    walkBackStep() {
        this.setState(({ activeStep }) => ({ activeStep: activeStep - 1 }));
    }

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;
        const ActiveComponent = pages[activeStep];

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

                        <Formik
                          initialValues={this.initialValues}
                          onSubmit={this.onSubmit}
                          validationSchema={CreateEventSchema}
                        >
                            {() => (
                                <Form>
                                    <ActiveComponent />
                                    <Divider className={classes.eventDividerPadding} />
                                    <Grid container justify="flex-end">
                                        { activeStep > 0 && (
                                            <Grid item className={classes.eventRegistrationButton}>
                                                <Button variant="contained" color="primary" onClick={this.walkBackStep.bind(this)}>
                                                    Go Back
                                                </Button>
                                            </Grid>
                                        )}
                                        <Grid item className={classes.eventRegistrationButton}>
                                            <Button variant="contained" color="primary" onClick={this.walkStep.bind(this)}>
                                                Next
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </CustomerPortalContainer>
        );
    }
}

export default withStyles(styles)(CreateAnEvent);
