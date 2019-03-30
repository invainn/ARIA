/* eslint-disable max-len */
// GENERAL IMPORTS
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import getTheme from '../../theme';

// ADMIN-PORTAL COMPONENTS
import CreateAnEvent from '../AP-AdminPortal/CreateAnEvent/CreateAnEvent';
import ScheduleAnEvent from '../AP-AdminPortal/ScheduleAnEvent/ScheduleAnEvent';
import ModifyAnEvent from '../AP-AdminPortal/ModifyAnEvent/ModifyAnEvent';
import ScheduleCommandPerformance
    from '../AP-AdminPortal/ScheduleCommandPerformance/ScheduleCommandPerformance';
import GenerateDocuments from '../AP-AdminPortal/GenerateDocuments/GenerateDocuments';
import UploadMusic from '../AP-AdminPortal/UploadMusic/UploadMusic';
import AddATeacher from '../AP-AdminPortal/AddATeacher/AddATeacher';

// CUSTOMER-PORTAL COMPONENTS
import CustomerAccount from '../CP-CustomerPortal/CustomerAccount/CustomerAccount';
import MyParticipants from '../CP-CustomerPortal/MyParticipants/MyParticipants';
import MyEnrollments from '../CP-CustomerPortal/MyEnrollments/MyEnrollments';
import RegisterForAnEvent from '../CP-CustomerPortal/RegisterForAnEvent/RegisterForAnEvent';
// import PaymentHistory from '../CP-CustomerPortal/PaymentHistory/PaymentHistory';

// NON-PORTAL COMPONENTS
import Login from '../NP-NonPortal/Login/Login';
import NotFound404Error from '../NP-NonPortal/Misc/HTML5ErrorPages/NotFound404Error/NotFound404Error';
import RegisterNewUser from '../NP-NonPortal/RegisterNewUser/RegisterNewUser';
import ForgotPassword from '../NP-NonPortal/ForgotPassword/ForgotPassword';

// SHARED-PORTAL COMPONENTS
import EventsCalendar from '../SP-SharedPortal/EventsCalendar/EventsCalendar';
import Dashboard from '../SP-SharedPortal/Dashboard/Dashboard';
import FAQ from '../SP-SharedPortal/FAQ/FAQ';
import AboutNNMTA from '../SP-SharedPortal/AboutNNMTA/AboutNNMTA';

// TEACHER-PORTAL COMPONENTS
import TeacherAccount from '../TP-TeacherPortal/TeacherAccount/TeacherAccount';
import MyStudents from '../TP-TeacherPortal/MyStudents/MyStudents';
import StudentRegistrations from '../TP-TeacherPortal/StudentRegistrations/StudentRegistrations';
import VolunteerTasks from '../TP-TeacherPortal/VolunteerTasks/VolunteerTasks';


const styles = () => ({
    '@global body': {
        margin: 0,
        padding: 0,
        fontFamily: 'sans-serif',
    },
});

const App = ({ themeChoice }) => (
    <MuiThemeProvider theme={createMuiTheme({ palette: { ...(getTheme(themeChoice)), type: themeChoice } })}>
        <BrowserRouter>
            <Switch>
                {/* ADMIN-PORTAL */}
                <Route exact path="/admin/create-an-event" component={CreateAnEvent} />
                <Route exact path="/admin/schedule-an-event" component={ScheduleAnEvent} />
                <Route exact path="/admin/edit-an-event" component={ModifyAnEvent} />
                <Route exact path="/admin/schedule-command-performance" component={ScheduleCommandPerformance} />
                {/* <Route exact path="/admin/edit-command-performance" component={ViewModifiyCommandPerformance} /> */}
                <Route exact path="/admin/add-a-teacher" component={AddATeacher} />
                <Route exact path="/admin/generate-documents" component={GenerateDocuments} />
                {/* <Route exact path="/admin/print-documents" component={PrintDocuments} /> */}
                {/* <Route exact path="/admin/upload-documents" component={UploadDocuments} /> */}
                <Route exact path="/admin/upload-music" component={UploadMusic} />
                {/* <Route exact path="/admin/events" component={Events} /> */}
                {/* <Route exact path="/admin/teachers" component={Teachers} /> */}
                {/* <Route exact path="/admin/students" component={Students} /> */}
                {/* <Route exact path="/admin/publish-schedule" component={PublishSchedule} /> */}
                {/* <Route exact path="/admin/publish-command-performance-schedule" component={PublishCommandPerformanceSchedule} /> */}
                {/* <Route exact path="/admin/edit-events-calender" component={ViewModifiyEventsCalender} /> */}
                {/* <Route exact path="/admin/edit-faq" component={ViewModifyFAQ} /> */}
                {/* <Route exact path="/admin/edit-about-us" component={ViewModifiyAboutUs} /> */}
                {/* <Route exact path="/admin/notifications" component={CreateSendNotification} /> */}
                {/* <Route exact path="/admin/news" component={ViewModifyNNMTANews} /> */}

                { /* CUSTOMER-PORTAL */ }
                <Route exact path="/customer/account" component={CustomerAccount} />
                <Route exact path="/customer/participants" component={MyParticipants} />
                <Route exact path="/customer/register-for-an-event" component={RegisterForAnEvent} />
                <Route exact path="/customer/my-enrollments" component={MyEnrollments} />

                { /* TEACHER-PORTAL */ }
                <Route exact path="/teacher/account" component={TeacherAccount} />
                <Route exact path="/teacher/my-students" component={MyStudents} />
                <Route exact path="/teacher/student-registrations" component={StudentRegistrations} />
                <Route exact path="/teacher/volunteer-tasks" component={VolunteerTasks} />

                { /* NON-PORTAL */ }
                <Route exact path="/register" component={RegisterNewUser} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <Route exact path="/" component={Login} />

                { /* SHARED-PORTAL */ }
                { /* ADMIN */ }
                <Route exact path="/admin/dashboard" render={props => <Dashboard {...props} userType={0} />} />
                <Route exact path="/admin/events-calendar" component={EventsCalendar} />
                <Route exact path="/admin/faq" component={FAQ} />
                <Route exact path="/admin/about" component={AboutNNMTA} />

                { /* CUSTOMER */ }
                <Route exact path="/customer/dashboard" component={Dashboard} />
                <Route exact path="/customer/events-calendar" component={EventsCalendar} />
                <Route exact path="/customer/faq" component={FAQ} />
                <Route exact path="/customer/about" component={AboutNNMTA} />

                { /* TEACHER */ }
                <Route exact path="/teacher/dashboard" render={props => <Dashboard {...props} userType={2} />} />
                <Route exact path="/teacher/events-calendar" component={EventsCalendar} />
                <Route exact path="/teacher/faq" component={FAQ} />
                <Route exact path="/teacher/about" component={AboutNNMTA} />


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

const mapStateToProps = ({ ShellHeader: { themeChoice } }) => ({ themeChoice });

export default withStyles(styles)(connect(mapStateToProps)(App));
