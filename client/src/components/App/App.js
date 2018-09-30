import React, { Component, Fragment } from 'react';
import Shell from '../Shell/Shell';
import { CssBaseline } from '@material-ui/core';

class App extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline />
                <Shell>
                </Shell>
            </Fragment>
        );
    }
}

export default App;