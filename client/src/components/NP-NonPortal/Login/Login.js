/* eslint-disable react/no-unused-state */
import React from 'react';
import {
    withStyles,
    Typography,
    Grid,
    TextField,
    Button,
    Icon,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import Music from './music.jpg';
import Shell from '../Shell/Shell';

const styles = theme => ({
    landing: {
        background: `url(${Music}) no-repeat center center`,
        backgroundSize: 'cover',

        height: '100vh',
        width: '100%',
        position: 'relative',

        // Needed to offset the AppBar
        marginTop: -74,
    },

    landingContent: {
        background: 'rgba(55, 71, 79)',
        border: '3px solid brown',
        backgroundSize: 'contain',
        transition: 'all 1s',
        width: '25%',
        padding: 20,
    },

    landingCaption: {
        marginTop: 15,
        color: '#FFFFFF',
    },

    margin: {
        margin: theme.spacing.unit,
        color: theme.palette.primary.contrastText,
    },

    button: {
        margin: theme.spacing.unit,
        color: '#FFFFFF',
        textAlign: 'center',
    },

    loginIcons: {
        color: theme.palette.primary.contrastText,
    },

    fieldText: {
        color: theme.palette.primary.contrastText,
    },
});


class Login extends React.Component {
    state = {
        username: '',
        password: '',
    };

    handleChange = name => (event) => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <Shell>
                <Grid className={classes.landing} container justify="center" alignItems="center">
                    <Grid className={classes.landingContent} container direction="column" justify="center" alignItems="center">
                        <Typography variant="title" align="center" className={classes.landingCaption}>
                            Northern Nevada Music Teacher Association
                        </Typography>

                        <form autoComplete="off">
                            <div className={classes.margin}>
                                <Grid container spacing={8} alignItems="flex-end">
                                    <Grid item>
                                        <Icon className={classes.loginIcons}>account_circle</Icon>
                                    </Grid>
                                    <Grid item className={classes.fieldText}>
                                        <TextField id="input-with-icon-grid" label="Username" className={classes.fieldText} onChange={this.handleChange('username')} required />
                                    </Grid>
                                </Grid>
                            </div>

                            <div className={classes.margin}>
                                <Grid container spacing={8} alignItems="flex-end">
                                    <Grid item>
                                        <Icon className={classes.loginIcons}>vpn_key</Icon>
                                    </Grid>
                                    <Grid item>
                                        <TextField id="input-with-icon-grid" type="password" label="Password" onChange={this.handleChange('password')} InputProps={{ classes: { input: classes.fieldText } }} required /> {/* TODO: wont change */}
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
                                <Typography className={classes.fieldText}>
                                    New User?
                                    <Button component={Link} to="/register" className={classes.button}>
                                            Click here to register!
                                    </Button>
                                </Typography>
                            </div>

                            <div>
                                <Button component={Link} to="/forgot-password">
                                    <Typography variant="caption" className={classes.fieldText}>
                                        Forgot your password?
                                    </Typography>
                                </Button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Shell>
        );
    }
}

export default withStyles(styles)(Login);
