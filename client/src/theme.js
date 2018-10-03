import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#7F0000',
            contrastText: '#ffffff',
        },

        secondary: {
            main: '#37474f',
            contrastText: '#ffffff',
        },

        error: red,

        type: 'dark',

        contrastThreshold: 3,

        tonalOffset: 0.2,
    },
});

export default theme;
