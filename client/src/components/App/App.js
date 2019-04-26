/* eslint-disable max-len */
// GENERAL IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// eslint-disable-next-line import/no-unresolved
import { PushSpinner } from 'react-spinners-kit';

import getTheme from '../../theme';

// ADMIN-PORTAL COMPONENTS
import CreateAnEvent from '../AP-AdminPortal/CreateAnEvent/CreateAnEvent';
import ScheduleAnEvent from '../AP-AdminPortal/ScheduleAnEvent/ScheduleAnEvent';
import ModifyAnEvent from '../AP-AdminPortal/ModifyAnEvent/ModifyAnEvent';
import ScheduleCommandPerformance
    from '../AP-AdminPortal/ScheduleCommandPerformance/ScheduleCommandPerformance';
import ViewModifyCommandPerformance
    from '../AP-AdminPortal/ViewModifyCommandPerformance/ViewModifyCommandPerformance';
import GenerateAndPrintDocuments from '../AP-AdminPortal/GenerateAndPrintDocuments/GenerateAndPrintDocuments';
import UploadMusic from '../AP-AdminPortal/UploadMusic/UploadMusic';
import UploadDocuments from '../AP-AdminPortal/UploadDocuments/UploadDocuments';
import AddATeacher from '../AP-AdminPortal/AddATeacher/AddATeacher';
import ViewModifyEventsCalender from '../AP-AdminPortal/ViewModifyEventsCalender/ViewModifyEventsCalender';
import ViewModifyAboutUs from '../AP-AdminPortal/ViewModifyAboutUs/ViewModifyAboutUs';
import ViewModifyFAQ from '../AP-AdminPortal/ViewModifyFAQ/ViewModifyFAQ';
import ViewModifyNNMTANews from '../AP-AdminPortal/ViewModifyNNMTANews/ViewModifyNNMTANews';
import CreateSendNotification from '../AP-AdminPortal/CreateSendNotification/CreateSendNotification';

// CUSTOMER-PORTAL COMPONENTS
import CustomerAccount from '../CP-CustomerPortal/CustomerAccount/CustomerAccount';
import MyParticipants from '../CP-CustomerPortal/MyParticipants/MyParticipants';
import MyEnrollments from '../CP-CustomerPortal/MyEnrollments/MyEnrollments';
import RegisterForAnEvent from '../CP-CustomerPortal/RegisterForAnEvent/RegisterForAnEvent';
// import PaymentHistory from '../CP-CustomerPortal/PaymentHistory/PaymentHistory';
import Login from '../../containers/NP-NonPortal/Login/LoginContainer';
import NotFound404Error from '../NP-NonPortal/Misc/HTML5ErrorPages/NotFound404Error/NotFound404Error';
import RegisterNewUser from '../../containers/NP-NonPortal/RegisterNewUser/RegisterNewUserContainer';
import ForgotPassword from '../NP-NonPortal/ForgotPassword/ForgotPassword';

// SHARED-PORTAL COMPONENTS
import EventsCalendar from '../SP-SharedPortal/EventsCalendar/EventsCalendar';
import Dashboard from '../../containers/SP-SharedPortal/Dashboard/DashboardContainer';
import FAQ from '../SP-SharedPortal/FAQ/FAQ';
import AboutNNMTA from '../SP-SharedPortal/AboutNNMTA/AboutNNMTA';

// TEACHER-PORTAL COMPONENTS
import TeacherAccount from '../TP-TeacherPortal/TeacherAccount/TeacherAccount';
import MyStudents from '../TP-TeacherPortal/MyStudents/MyStudents';
import StudentRegistrations from '../TP-TeacherPortal/StudentRegistrations/StudentRegistrations';
import Tasks from '../TP-TeacherPortal/Tasks/Tasks';

// Authentication HOCs
import withAuth from '../../containers/withAuth';
import noAuth from '../../containers/noAuth';

const styles = () => ({
    '@global body': {
        margin: 0,
        padding: 0,
        fontFamily: 'sans-serif',
    },

    spinner: {
        height: '100vh',
        width: '100vw',
    },
});

class App extends Component {
    componentDidMount = () => {
        const { loadUserFromToken } = this.props;
        loadUserFromToken();
    }

    render() {
        const { classes, themeChoice, type } = this.props;

        // If type isn't loaded, then we don't know if the user is auth'd, so render loading
        if (type === null) {
            return (
                <Grid container direction="row" justify="center" alignItems="center" className={classes.spinner}>
                    <PushSpinner
                      size={35}
                      color="#37474f"
                      loading
                    />
                </Grid>
            );
        }

        return (
            <MuiThemeProvider theme={createMuiTheme({ palette: { ...(getTheme(themeChoice)), type: themeChoice } })}>
                <BrowserRouter>
                    <Switch>
                        {/* ADMIN-PORTAL */}
                        <Route exact path="/admin/create-an-event" component={withAuth(CreateAnEvent, 2)} />
                        <Route exact path="/admin/schedule-an-event" component={withAuth(ScheduleAnEvent, 2)} />
                        <Route exact path="/admin/edit-an-event" component={withAuth(ModifyAnEvent, 2)} />
                        <Route exact path="/admin/schedule-command-performance" component={withAuth(ScheduleCommandPerformance, 2)} />
                        <Route exact path="/admin/edit-command-performance" component={withAuth(ViewModifyCommandPerformance, 2)} />
                        <Route exact path="/admin/add-a-teacher" component={withAuth(AddATeacher, 2)} />
                        <Route exact path="/admin/generate-documents" component={withAuth(GenerateAndPrintDocuments, 2)} />
                        <Route exact path="/admin/upload-documents" component={withAuth(UploadDocuments, 2)} />
                        <Route exact path="/admin/upload-music" component={withAuth(UploadMusic, 2)} />
                        {/* <Route exact path="/admin/events" component={withAuth(Events, 2)} /> */}
                        {/* <Route exact path="/admin/teachers" component={withAuth(Teachers, 2)} /> */}
                        {/* <Route exact path="/admin/students" component={withAuth(Students, 2)} /> */}
                        {/* <Route exact path="/admin/publish-schedule" component={withAuth(PublishSchedule, 2)} /> */}
                        {/* <Route exact path="/admin/publish-command-performance-schedule" component={withAuth(PublishCommandPerformanceSchedule, 2)} /> */}
                        <Route exact path="/admin/edit-events-calender" component={withAuth(ViewModifyEventsCalender, 2)} />
                        {/* <Route exact path="/admin/edit-faq" component={withAuth(ViewModifyFAQ, 2)} /> */}
                        {/* <Route exact path="/admin/edit-about-us" component={withAuth(ViewModifiyAboutUs, 2)} /> */}
                        {/* <Route exact path="/admin/notifications" component={withAuth(CreateSendNotification, 2)} /> */}
                        {/* <Route exact path="/admin/news" component={withAuth(ViewModifyNNMTANews, 2)} /> */}

                        { /* CUSTOMER-PORTAL */ }
                        <Route exact path="/customer/account" component={withAuth(CustomerAccount, 0)} />
                        <Route exact path="/customer/participants" component={withAuth(MyParticipants, 0)} />
                        <Route exact path="/customer/register-for-an-event" component={withAuth(RegisterForAnEvent, 0)} />
                        <Route exact path="/customer/my-enrollments" component={withAuth(MyEnrollments, 0)} />

                        { /* TEACHER-PORTAL */ }
                        <Route exact path="/teacher/account" component={withAuth(TeacherAccount, 1)} />
                        <Route exact path="/teacher/my-students" component={withAuth(MyStudents, 1)} />
                        <Route exact path="/teacher/student-registrations" component={withAuth(StudentRegistrations, 1)} />
                        <Route exact path="/teacher/tasks" component={withAuth(Tasks, 1)} />

                        { /* NON-PORTAL */ }
                        <Route exact path="/register" component={noAuth(RegisterNewUser)} />
                        <Route exact path="/forgot-password" component={noAuth(ForgotPassword)} />
                        <Route exact path="/" component={noAuth(Login)} />

                        { /* SHARED-PORTAL */ }
                        { /* ADMIN */ }
                        <Route exact path="/admin/dashboard" component={withAuth(Dashboard, 2)} />
                        <Route exact path="/admin/events-calendar" component={withAuth(EventsCalendar, 2)} />
                        <Route exact path="/admin/faq" component={withAuth(FAQ, 2)} />
                        <Route exact path="/admin/about" component={withAuth(AboutNNMTA, 2)} />

                        { /* CUSTOMER */ }
                        <Route exact path="/customer/dashboard" component={withAuth(Dashboard, 0)} />
                        <Route exact path="/customer/events-calendar" component={withAuth(EventsCalendar, 0)} />
                        <Route exact path="/customer/faq" component={withAuth(FAQ, 0)} />
                        <Route exact path="/customer/about" component={withAuth(AboutNNMTA, 0)} />

                        { /* TEACHER */ }
                        <Route exact path="/teacher/dashboard" component={withAuth(Dashboard, 1)} />
                        <Route exact path="/teacher/events-calendar" component={withAuth(EventsCalendar, 1)} />
                        <Route exact path="/teacher/faq" component={withAuth(FAQ, 1)} />
                        <Route exact path="/teacher/about" component={withAuth(AboutNNMTA, 1)} />


                        { /* ALTERNATE DASHBOARDS -- NEEDS TO BE IMPLEMENTED AFTER APPLICATION RESTRUCTURING
                            FOR NOW, THE TWO ROUTES BELOW HAVE BEEN COMMENTED OUT UNTIL THEY ARE UPDATED. */ }
                        {/* <Route exact path="/teacher-portal" render={props => <Dashboard {...props} userType={2} />} /> */}
                        {/* <Route exact path="/admin/portal" render={props => <Dashboard {...props} userType={0} />} /> */}

                        { /* HTML5 ERRORS */ }
                        <Route path="*" component={NotFound404Error} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = ({ ShellHeader: { themeChoice } }) => ({ themeChoice });

export default withStyles(styles)(connect(mapStateToProps)(App));
