import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import theme from './theme';

import './index.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
    <Provider store={configureStore()}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
