/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
import React from 'react';
import {
    withStyles,
    Typography,
    Grid,
    TextField,
    Button,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import classNames from 'classnames';

import Bow from './bow.jpg';
import Shell from '../Shell/Shell';

const styles = theme => ({
    landing: {
        background: `url(${Bow}) no-repeat center center`,
        backgroundSize: '100% 100%',

        height: '100vh',
        width: '100%',
        position: 'relative',

        // Needed to offset the AppBar
        marginTop: -100,
    },

    landingContent: {
        background: '#FFFFFF',
        border: '3px solid brown',
        backgroundSize: 'contain',
        transition: 'all 1s',
        width: '400px',
        padding: '15px',
        marginTop: '21vh',
    },

    landingCaption: {
        marginTop: 15,
    },

    margin: {
        margin: theme.spacing.unit,
        color: theme.palette.primary.contrastText,
    },

    button: {
        textAlign: 'center',
        width: '44%',
        display: 'block',
        verticalAlign: 'text-top',
        margin: '10px auto 10px auto',
        maxWidth: '233.27px',
    },
    infoMessageStyles: {
        width: ' 80%',
        textAlign: 'center',
    },
    emailInputfieldStyles: {
        width: '65%',
        margin: '5px auto 5px auto',
    },
    buttonGroup: {
        marginTop: '15px',
    },
});


class RegisterNewUser extends React.Component {
    state = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
    };

    handleChange = name => (event) => {
        this.setState({ [name]: event.target.value });
    };

    onHandleRegistration = (e) => {
        e.preventDefault();

        const { registerUser } = this.props;

        const {
            email,
            password,
            first_name,
            last_name,
        } = this.state;

        registerUser({
            email,
            password,
            first_name,
            last_name,
        });
    };

    // Used to reset the register status so users can access
    // the register page again if not authenticated
    componentWillUnmount = () => {
        const { registerReset } = this.props;

        registerReset();
    };

    render() {
        const { classes, regStatus } = this.props;

        if (regStatus === 1) {
            return <Redirect to="/" />;
        }

        return (
            <Shell>
                <Grid className={classes.landing} container justify="center" alignItems="center">
                    <Grid className={classes.landingContent} container direction="column" justify="center" alignItems="center">
                        <Typography variant="title" align="center" className={classes.landingCaption}>
                            Northern Nevada Music Teacher Association (NNMTA)
                        </Typography>
                        <Typography
                          variant="body1"
                          align="center"
                          className={classNames({
                            [classes.landingCaption]: true,
                            [classes.infoMessageStyles]: true,
                            })}
                        >
                            Create an account to manage all of your
                            future performances in one easy place!
                        </Typography>
                        <Grid container justify="center" align="center">
                                <TextField
                                  id="outlined-email-input"
                                  label="Email Address"
                                  className={classNames({
                                      [classes.emailInputfieldStyles]: true,
                                    })}
                                  type="email"
                                  name="email"
                                  autoComplete="email"
                                  onChange={this.handleChange('email')}
                                  required
                                />
                                <TextField
                                  id="outlined-password-input"
                                  label="Password"
                                  className={classNames({
                                    [classes.emailInputfieldStyles]: true,
                                })}
                                  type="password"
                                  name="password"
                                  autoComplete="password"
                                  onChange={this.handleChange('password')}
                                  required
                                />
                                <TextField
                                  id="customer-first-name"
                                  label="First Name"
                                  className={classNames({
                                      [classes.emailInputfieldStyles]: true,
                                  })}
                                  name="first_name"
                                  onChange={this.handleChange('first_name')}
                                  required
                                />
                                <TextField
                                  id="customer-last-name"
                                  className={classes.emailInputfieldStyles}
                                  label="Last Name"
                                  name="last_name"
                                  onChange={this.handleChange('last_name')}
                                  required
                                />
                            <Grid xs={12} alignItems="center" className={classes.buttonGroup}>
                                <Button variant="contained" color="primary" className={classes.button} onClick={this.onHandleRegistration}>
                                    Create Account
                                </Button>
                                <Link to="/">
                                    <Button color="secondary" variant="contained" className={classes.button}>
                                        Go Back
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Shell>
        );
    }
}

export default withStyles(styles)(RegisterNewUser);
