import React, { Component, Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import Home from '../Home/Home';

class App extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline />
                <Home />
            </Fragment>
        );
    }
}

export default App;