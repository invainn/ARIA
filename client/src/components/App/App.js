/* eslint-disable max-len */
import React from 'react';
import { withStyles } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../statuscodes/404/NotFound';
import Dashboard from '../Shell/CustomerPortal/MenuOptions/Dashboard';
import Account from '../Shell/CustomerPortal/MenuOptions/Account';
import RegStudForm from '../Shell/CustomerPortal/MenuOptions/RegisteredStudentsForm/RegStudForm';
import FAQ from '../Shell/CustomerPortal/MenuOptions/FAQ';
import AboutUs from '../Shell/CustomerPortal/MenuOptions/AboutUs';
import EventsCalendar from '../Shell/CustomerPortal/MenuOptions/EventsCalendar';
import EventRegistration from '../Shell/CustomerPortal/MenuOptions/EventRegistration';
import Login from '../Login/Login';

const styles = () => ({
    '@global body': {
        margin: 0,
        padding: 0,
        fontFamily: 'sans-serif',
    },
});

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/customer" component={Dashboard} />
            <Route path="/customer/account-info" component={Account} />
            <Route exact path="/customer/registered-students" component={RegStudForm} />
            <Route exact path="/customer/events-calendar" component={EventsCalendar} />
            <Route exact path="/customer/register-for-an-event" component={EventRegistration} />
            <Route exact path="/customer/faq" component={FAQ} />
            <Route exact path="/customer/about" component={AboutUs} />
    {/*        <Route exact path="/customer/active-registrations" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/payment-history" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/faq" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/about" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} /> */}
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default withStyles(styles)(App);
