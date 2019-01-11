/* eslint-disable max-len */
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import NotFound from '../statuscodes/404/NotFound';
import AccountCreation from '../AccountCreation/AccountCreation';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Dashboard from '../CustomerPortal/Dashboard/Dashboard';
import Account from '../CustomerPortal/Account/Account';
import FAQ from '../CustomerPortal/FAQ/FAQ';
import AboutUs from '../CustomerPortal/AboutUs/AboutUs';
import EventsCalendar from '../CustomerPortal/EventsCalendar/EventsCalendar';
import RegisterForAnEvent from '../CustomerPortal/RegisterForAnEvent/RegisterForAnEvent';
import ActiveRegistrations from '../CustomerPortal/ActiveRegistrations/ActiveRegistrations';
import Login from '../Login/Login';
import Participants from '../CustomerPortal/Participants/Participants';
// import PaymentHistory from '../CustomerPortal/PaymentHistory/PaymentHistory';

// ADMIN PORTAL
import CreateEvent from '../CustomerPortal/AdminPortal/CreateEvent/CreateEvent';
import ScheduleEvent from '../CustomerPortal/AdminPortal/ScheduleEvent/ScheduleEvent';

// TEACHER PORTAL
import TeacherAccount from '../CustomerPortal/TeacherPortal/TeacherAccount/TeacherAccount';
import MyStudents from '../CustomerPortal/TeacherPortal/MyStudents/MyStudents';
import StudentRegistrations from '../CustomerPortal/TeacherPortal/StudentRegistrations/StudentRegistrations';
import VolunteerForAnEvent from '../CustomerPortal/TeacherPortal/VolunteerForAnEvent/VolunteerForAnEvent';
import VolunteerSuccess from '../CustomerPortal/TeacherPortal/VolunteerForAnEvent/VolunteerSuccess';

import getTheme from '../../theme';

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
                <Route exact path="/" component={Login} />
                <Route exact path="/create-an-account" component={AccountCreation} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <Route exact path="/customer" component={Dashboard} />
                <Route path="/customer/account-info" component={Account} />
                <Route exact path="/customer/participants" component={Participants} />
                <Route exact path="/customer/events-calendar" component={EventsCalendar} />
                <Route exact path="/customer/register-for-an-event" component={RegisterForAnEvent} />
                <Route exact path="/customer/faq" component={FAQ} />
                <Route exact path="/customer/about" component={AboutUs} />
                <Route exact path="/customer/active-registrations" component={ActiveRegistrations} />
        {/*     <Route exact path="/customer/payment-history" component={PaymentHistory} />
                <Route exact path="/customer/payment-history" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
                <Route exact path="/customer/faq" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
                <Route exact path="/customer/about" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} /> */}
               
                {/* ADMIN PORTAL */}
                <Route exat path="/admin/portal" component={Dashboard} />
                <Route exact path="/admin/create-an-event" component={CreateEvent} />
                <Route exact path="/admin/schedule-an-event" component={ScheduleEvent} />

                { /* TEACHER PORTAL */ }
                <Route exact path="/teacher-portal" component={Dashboard} />
                <Route exact path="/teacher-portal/teacher-account" component={TeacherAccount} />
                <Route exact path="/teacher-portal/my-students" component={MyStudents} />
                <Route exact path="teacher-portal/student-registrations" component={StudentRegistrations} />
                <Route exact path="/teacher-portal/events-calendar" component={EventsCalendar} />
                <Route exact path="/teacher-portal/volunteer-for-an-event" component={VolunteerForAnEvent} />
                <Route exact path="/teacher-portal/volunteer-success" component={VolunteerSuccess} />
                <Route exact path="/teacher-portal/faq" component={FAQ} />
                <Route exact path="/teacher-portal/about" component={AboutUs} />

                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>
);

const mapStateToProps = ({ ShellHeader: { themeChoice } }) => ({ themeChoice });

export default withStyles(styles)(connect(mapStateToProps)(App));
