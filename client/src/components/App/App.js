import React from 'react';
import { withStyles } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';

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
        </Switch>
    </BrowserRouter>
);

export default withStyles(styles)(App);
