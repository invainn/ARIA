import React from 'react';
import { withStyles } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../statuscodes/404/NotFound';
import Home from '../Home/Home';
import CustomerPortalContainer from '../../containers/Shell/CustomerPortal/CustomerPortalContainer';

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
            <Route exact path="/customer/" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/account-info" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/registered-students" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/events-calendar" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/register-for-an-event" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/active-registrations" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/payment-history" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/faq" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route exact path="/customer/about" render={props => <CustomerPortalContainer {...props} pathname={props.location} />} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default withStyles(styles)(App);
