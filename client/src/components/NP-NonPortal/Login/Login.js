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
import classNames from 'classnames';

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
        background: 'rgba(55, 71, 79)',
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
        width: '100%',
    },

    loginIcons: {
        color: theme.palette.primary.contrastText,
    },

    fieldText: {
        color: theme.palette.primary.contrastText,
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
        color: '#FFFFFF',
    }
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
                            Northern Nevada Music Teacher Association (NNMTA)
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
                                <Typography className={classNames({[classes.fieldText]: true, [classes.fieldTextTwo]: true})}>
                                    New to ARIA?
                                </Typography>
                                <Typography className={classNames({[classes.fieldText]: true, [classes.fieldTextTwo]: true})} component={Link} to="/register">
                                    Create an account.
                                </Typography>
                            </div>

                            <div>
                                <Typography component={Link} to="/forgot-password" className={classNames({[classes.fieldText]: true, [classes.fieldTextThree]: true})}>
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
