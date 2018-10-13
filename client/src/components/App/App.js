import React from 'react';
import { withStyles } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../statuscodes/404/NotFound';
import Home from '../Home/Home';
import CustomerPortal from '../CustomerPortal/CustomerPortal';

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
            <Route exact path="/customer" component={CustomerPortal} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default withStyles(styles)(App);
