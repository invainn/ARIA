/* eslint-disable max-len */
import React from 'react';
import { withStyles } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../statuscodes/404/NotFound';
import Home from '../Home/Home';
import Dashboard from '../Shell/CustomerPortal/MenuOptions/Dashboard';
import Account from '../Shell/CustomerPortal/MenuOptions/Account';
import RegStudForm from '../Shell/CustomerPortal/MenuOptions/RegisteredStudentsForm/RegStudForm';
import FAQ from '../Shell/CustomerPortal/MenuOptions/FAQ';

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
            <Route exact path="/" component={Home} />
            <Route exact path="/customer" component={Dashboard} />
            <Route path="/customer/account-info" component={Account} />
            <Route exact path="/customer/registered-students" component={RegStudForm} />
            <Route exact path="/customer/FAQ" component={FAQ} />
  {/*       <Route exact path="/customer/events-calendar" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/register-for-an-event" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/active-registrations" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/payment-history" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/faq" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/about" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} /> */}
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default withStyles(styles)(App);
