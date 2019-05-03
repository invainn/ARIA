/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
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

import ARIA_SERVER_URL from '../../../config';

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

const SuccessComponent = () => (
    <Grid container justify="center" alignItems="center" style={{ height: '225px' }}>
        <Typography variant="h5" align="center">
            Event created successfully!
        </Typography>
    </Grid>
);

const pages = [EventInfo, StudentInfo, TeacherInfo, SuccessComponent];

// Validation Schema
const CreateEventSchema = Yup.object().shape({
    event: Yup.object().shape({
        Name: Yup.string().required('Required'),
        StartDate: Yup.date().required('Required'),
        EndDate: Yup.date().required('Required'),
        Address: Yup.string().required('Required'),
        ChairEmail: Yup.string().email('Invalid Email').required('Required'),
        City: Yup.string().required('Required'),
        State: Yup.string().required('Required'),
        Zipcode: Yup.number('Must be a number').typeError('Must be a number').required('Required'),
        HasCommandPerformance: Yup.boolean().required('Required'),
        StudentMultipleLevels: Yup.boolean().required('Required'),
        HasJudging: Yup.boolean().required('Required'),
        CommandPerformanceName: Yup.string().when('event.HasCommandPerformance', {
            is: true,
            then: Yup.string().required('Required'),
            else: Yup.string(),
        }),
        StudentStartDate: Yup.date().required('Required'),
        StudentEndDate: Yup.date().required('Required'),
        TeacherStartDate: Yup.date().required('Required'),
        TeacherEndDate: Yup.date().required('Required'),
    }),
});

class CreateAnEvent extends Component {
    state = {
        activeStep: 0,
    };

    initialValues = {
        event: {
            Name: '',
            StartDate: new Date(),
            EndDate: new Date(),
            Address: '',
            ChairEmail: '',
            City: '',
            State: '',
            Zipcode: '',
            HasCommandPerformance: false,
            CommandPerformanceName: '',
            StudentMultipleLevels: false,
            HasJudging: false,
            StudentStartDate: new Date(),
            StudentEndDate: new Date(),
            TeacherStartDate: new Date(),
            TeacherEndDate: new Date(),
        },
    };

    onSubmit = async ({ event }) => {
        await axios.post(`${ARIA_SERVER_URL}/admin/event`, event, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
        });

        this.setState(({ activeStep }) => ({ activeStep: activeStep + 1 }));
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
                          onSubmit={this.onSubmit.bind(this)}
                          validationSchema={CreateEventSchema}
                        >
                            {({ values, submitForm, isSubmitting }) => (
                                <Form>
                                    <ActiveComponent values={values} />
                                    <Grid container justify="flex-end">
                                        { activeStep > 0 && activeStep < 3 && (
                                            <>
                                                <Divider className={classes.eventDividerPadding} />
                                                <Grid item className={classes.eventRegistrationButton}>
                                                    <Button variant="contained" color="primary" onClick={this.walkBackStep.bind(this)}>
                                                        Go Back
                                                    </Button>
                                                </Grid>
                                            </>
                                        )}
                                        { (activeStep < 2) && (
                                            <Grid item className={classes.eventRegistrationButton}>
                                                <Button variant="contained" color="primary" onClick={this.walkStep.bind(this)}>
                                                    Next
                                                </Button>
                                            </Grid>
                                        )}
                                        { (activeStep === 2) && (
                                            <Grid item className={classes.eventRegistrationButton}>
                                                <Button variant="contained" color="primary" onClick={submitForm} disabled={isSubmitting}>
                                                    Submit
                                                </Button>
                                            </Grid>
                                        )}
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
