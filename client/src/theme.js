import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: {
            main: '#006064'
        },
        error: red,

        type: "dark",
        
        contrastThreshold: 3,

        tonalOffset: 0.2,
    },
});

export default theme;