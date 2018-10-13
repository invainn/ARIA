import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    Typography,
    Grid,
    TextField,
    Button,
} from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';
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
    },
});


const Login = ({ classes }) => (
    <Shell>
        <Grid className={classes.landing} container justify="center" alignItems="center">
            <Grid className={classes.landingContent} container direction="column" justify="center" alignItems="center">
                <Typography variant="title" align="center" color="textPrimary" className={classes.landingCaption}>
                    Northern Nevada Music Teacher Association
                </Typography>

                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Username" />
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <VpnKey />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Password" />
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Button variant="contained" color="primary" className={classes.button}>
                            Sign In
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Register
                        </Button>
                    </Grid>
                </div>

            </Grid>
        </Grid>
    </Shell>
);

Login.propTypes = {
    classes: PropTypes.objectOf(
        PropTypes.node,
    ),
};

Login.defaultProps = {
    classes: {},
};

export default withStyles(styles)(Login);
