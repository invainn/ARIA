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
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>
);

const mapStateToProps = ({ ShellHeader: { themeChoice } }) => ({ themeChoice });

export default withStyles(styles)(connect(mapStateToProps)(App));
