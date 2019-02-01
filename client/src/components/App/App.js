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
import GenerateDocuments from '../AP-AdminPortal/GenerateDocuments/GenerateDocuments';
import UploadMusic from '../AP-AdminPortal/UploadMusic/UploadMusic';

// CUSTOMER-PORTAL COMPONENTS
import CustomerAccount from '../CP-CustomerPortal/CustomerAccount/CustomerAccount';
import MyParticipants from '../CP-CustomerPortal/MyParticipants/MyParticipants';
import ActiveRegistrations from '../CP-CustomerPortal/ActiveRegistrations/ActiveRegistrations';
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
import VolunteerForAnEvent from '../TP-TeacherPortal/VolunteerForAnEvent/VolunteerForAnEvent';
import VolunteerSuccess from '../TP-TeacherPortal/VolunteerForAnEvent/VolunteerSuccess';


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
                <Route exact path="/admin/modify-an-event" component={ModifyAnEvent} />
                <Route exact path="/admin/generate-documents" component={GenerateDocuments} />
                <Route exact path="/admin/upload-music" component={UploadMusic} />

                { /* CUSTOMER-PORTAL */ }
                <Route exact path="/customer/account" component={CustomerAccount} />
                <Route exact path="/customer/participants" component={MyParticipants} />
                <Route exact path="/customer/register-for-an-event" component={RegisterForAnEvent} />
                <Route exact path="/customer/active-registrations" component={ActiveRegistrations} />

                { /* NON-PORTAL */ }
                <Route exact path="/register" component={RegisterNewUser} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <Route exact path="/" component={Login} />

                { /* SHARED-PORTAL */ }
                { /* ADMIN */ }
                <Route exact path="/admin/dashboard" component={Dashboard} />
                <Route exact path="/admin/events-calendar" component={EventsCalendar} />
                <Route exact path="/admin/faq" component={FAQ} />
                <Route exact path="/admin/about" component={AboutNNMTA} />
                { /* CUSTOMER */ }
                <Route exact path="/customer/dashboard" component={Dashboard} />
                <Route exact path="/customer/events-calendar" component={EventsCalendar} />
                <Route exact path="/customer/faq" component={FAQ} />
                <Route exact path="/customer/about" component={AboutNNMTA} />
                { /* TEACHER */ }
                <Route exact path="/teacher/dashboard" component={Dashboard} />
                <Route exact path="/teacher/events-calendar" component={EventsCalendar} />
                <Route exact path="/teacher/faq" component={FAQ} />
                <Route exact path="/teacher/about" component={AboutNNMTA} />

                { /* TEACHER-PORTAL */ }
                <Route exact path="/teacher/account" component={TeacherAccount} />
                <Route exact path="/teacher/my-students" component={MyStudents} />
                <Route exact path="/teacher/student-registrations" component={StudentRegistrations} />
                <Route exact path="/teacher/volunteer-for-an-event" component={VolunteerForAnEvent} />
                <Route exact path="/teacher/volunteer-success" component={VolunteerSuccess} />


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
