import React from 'react';
import {
    withStyles,
    Typography,
    Grid,
    TextField,
   // TextField,
   // Icon,
   // Button,
} from '@material-ui/core';

import Violin from '../Login/violin.jpg';
import Shell from '../Shell/Shell';

const styles = theme => ({
    landing: {
        background: `url(${Violin}) no-repeat center center`,
        backgroundSize: 'cover',

        height: '100vh',
        width: '100%',
        position: 'relative',
    },

    landingContent: {
        background: 'rgba(55, 71, 79, 0.3)',
        border: '3px solid brown',
        backgroundSize: 'contain',
        transition: 'all 1s',
        width: '40%',
        padding: 20,

        // Needed to offset the AppBar
        marginTop: 100,
    },

    landingCaption: {
        marginTop: 15,
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },

    button: {
        marginTop: 25,
        marginLeft: 20,
    },

    loginIcons: {
        color: theme.palette.primary.contrastText,
    },

    iconTextHeight: {
        lineHeight: '75px',
        height: '85px',
    },
});


const AddInfo = ({ classes }) => (
    <Shell>
        <Grid className={classes.landing} container justify="center" alignItems="center">
            <Grid className={classes.landingContent} container direction="column" justify="center" alignItems="center">
                <Typography variant="h6">
                    Add your participants information here!
                </Typography>

                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            <TextField
                              id="outlined-first-name"
                              label="First Name"
                              margin="normal"
                              variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                              id="outlined-last-name"
                              label="Last Name"
                              margin="normal"
                              variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    </Shell>
);

export default withStyles(styles)(AddInfo);
