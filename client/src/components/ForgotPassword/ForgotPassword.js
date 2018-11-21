import React from 'react';
import {
    withStyles,
    Typography,
    Grid,
    TextField,
    Button,
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
});


const ForgotPassword = ({ classes }) => (
    <Shell>
        <Grid className={classes.landing} container justify="center" alignItems="center">
            <Grid className={classes.landingContent} container direction="column" justify="center" alignItems="center">
                <Typography variant="title" align="center" color="textPrimary" className={classes.landingCaption}>
                    Northern Nevada Music Teacher Association
                </Typography>

                <Typography variant="body1" align="center">
                    Please enter your e-mail address and we will send a password
                    for you to login with!
                </Typography>

                <Grid container justify="space-evenly" direction="row">
                    <Grid xs={8}>
                        <TextField
                            id="outlined-email-input"
                            label="Enter your Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid xs={4} alignItems="center">
                        <Button className={classes.button}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Shell>
);

export default withStyles(styles)(ForgotPassword);
