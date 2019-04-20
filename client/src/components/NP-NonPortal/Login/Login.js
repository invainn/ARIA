/* eslint-disable react/no-unused-state */
// eslint-disable-next-line import/no-unresolved
import React from 'react';
import {
    withStyles,
    Typography,
    Grid,
    TextField,
    Button,
    Icon,
// eslint-disable-next-line import/no-unresolved
} from '@material-ui/core';
// eslint-disable-next-line import/no-unresolved
import classNames from 'classnames';
// eslint-disable-next-line import/no-unresolved
import { Link, Redirect } from 'react-router-dom';

import Music from './music.jpg';
import Shell from '../Shell/Shell';

const styles = theme => ({
    landing: {
        background: `url(${Music}) no-repeat center center`,
        backgroundSize: '100% 100%',

        height: '100vh',
        width: '100%',
        position: 'relative',

        // Needed to offset the AppBar
        marginTop: -100,
    },

    landingContent: {
        // background: 'rgba(55, 71, 79)',
        background: '#FFFFFF',
        border: '3px solid brown',
        backgroundSize: 'contain',
        transition: 'all 1s',
        width: '25%',
        padding: 20,
        float: 'left',
        position: 'absolute',
        transform: 'translateY(-50%) translateX(-50%)',
        top: '59%',
        left: '50%',
    },

    landingCaption: {
        marginTop: 15,
    },

    margin: {
        margin: theme.spacing.unit,
        color: theme.palette.primary.contrastText,
    },

    button: {
        margin: '12px auto 5px auto',
        textAlign: 'center',
        width: '100%',
        maxWidth: '233.27px',
    },

    loginIcons: {
        color: '#000000',
        // color: theme.palette.primary.contrastText,
    },

    fieldText: {
        // color: theme.palette.primary.contrastText,
    },
    fieldTextTwo: {
        display: 'inline-block',
        margin: '10px',
        alignItems: 'center',
        textAlign: 'center',
    },
    fieldTextThree: {
        textAlign: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    placeHolderStyles: {
    },
});


class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = name => (event) => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        // Execute some action to login the user.
        // Through redux, store the resulting token inside of the store.
        const { loginUser } = this.props;

        loginUser({ ...this.state });
    };

    render() {
        const { classes, authenticated } = this.props;

        if (authenticated) {
            return <Redirect to="/customer/dashboard" />;
        }

        return (
            <Shell>
                <Grid className={classes.landing} container justify="center" alignItems="center">
                    <Grid className={classes.landingContent} container direction="column" justify="center" alignItems="center">
                        <Typography variant="title" align="center" className={classes.landingCaption}>
                            Northern Nevada Music Teacher Association (NNMTA)
                        </Typography>

                        <form autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
                            <div className={classes.margin}>
                                <Grid container spacing={8} alignItems="flex-end">
                                    <Grid item>
                                        <Icon className={classes.loginIcons}>account_circle</Icon>
                                    </Grid>
                                    <Grid item className={classes.fieldText}>
                                        <TextField id="input-with-icon-grid" label="Username" className={classes.fieldText} onChange={this.handleChange('email')} required />
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
                                    <Button variant="contained" color="primary" className={classes.button} type="submit">
                                        Sign In
                                    </Button>
                                </Grid>
                            </div>

                            <div>
                                <Typography className={
                                                classNames({
                                                    [classes.fieldText]: true,
                                                    [classes.fieldTextTwo]: true,
                                                })}
                                >
                                    New to ARIA?
                                </Typography>
                                <Typography className={classNames({ [classes.fieldText]: true, [classes.fieldTextTwo]: true })} component={Link} to="/register">
                                    Create an account.
                                </Typography>
                            </div>

                            <div>
                                <Typography component={Link} to="/forgot-password" className={classNames({ [classes.fieldText]: true, [classes.fieldTextThree]: true })}>
                                    Forgot your password?
                                </Typography>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Shell>
        );
    }
}

export default withStyles(styles)(Login);
