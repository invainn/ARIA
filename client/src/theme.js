import red from '@material-ui/core/colors/red';

const getTheme = theme => ({
        primary: {
            main: '#7F0000',
            contrastText: '#ffffff',
        },

        secondary: {
            main: '#37474f',
            light: '#FFBA54',
            contrastText: '#ffffff',
        },

        background: {
            default: (theme === 'dark') ? '#303030' : '#DAE0E6',
            paper: (theme === 'dark') ? '#424242' : '#FFFFFF',
        },

        error: red,

        contrastThreshold: 3,

        tonalOffset: 0.2,
    });

export default getTheme;
