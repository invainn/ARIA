import React from 'react';
import { Link } from 'react-router-dom';
import {
    withStyles,
    Typography,
    Grid,
    TextField,
    Button,
    Icon,
} from '@material-ui/core';

import Violin from './violin.jpg';
import Shell from '../Shell/Shell';

const styles = theme => ({
    landing: {
        background: `url(${Violin}) no-repeat center center`,
        backgroundSize: 'cover',

        height: '100vh',
        width: '100%',
        position: 'relative',

        // Needed to offset the AppBar
        marginTop: -74,
    },

    landingContent: {
        background: 'rgba(55, 71, 79, 0.3)',
        border: '3px solid brown',
        backgroundSize: 'contain',
        transition: 'all 1s',
        width: '25%',
        padding: 20,
    },

    landingCaption: {
        marginTop: 15,
    },

    margin: {
        margin: theme.spacing.unit,
    },

    button: {
        margin: theme.spacing.unit,
        color: '#FFFFFF',
    },

    loginIcons: {
        color: theme.palette.primary.contrastText,
    },
});


const Login = ({ classes }) => (
    <Shell>
        <Grid className={classes.landing} container justify="center" alignItems="center">
            <Grid className={classes.landingContent} container direction="column" justify="center" alignItems="center">
                <Typography variant="title" align="center" style={{ color: '#FFFFFF' }} className={classes.landingCaption}>
                    Northern Nevada Music Teacher Association
                </Typography>

                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Icon className={classes.loginIcons}>account_circle</Icon>
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Username" style={{ color: '#FFFFFF' }} />
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Icon className={classes.loginIcons}>vpn_key</Icon>
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Password" style={{ color: '#FFFFFF' }} />
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Button variant="contained" color="primary" className={classes.button}>
                            Sign In
                        </Button>
                    </Grid>
                </div>

                <div>
                    <Typography style={{ color: '#FFFFFF' }}>
                        Dont have a login?
                        <Button component={Link} to="/create-an-account" className={classes.button}>
                                Click here to register!
                        </Button>
                    </Typography>
                </div>

                <div>
                    <Button component={Link} to="/forgot-password">
                        <Typography variant="caption" style={{ color: '#FFFFFF' }}>
                            Forgot your password?
                        </Typography>
                    </Button>
                </div>

            </Grid>
        </Grid>
    </Shell>
);

export default withStyles(styles)(Login);
