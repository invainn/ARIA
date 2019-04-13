import React from 'react';
import {
    withStyles,
    Typography,
    Grid,
    TextField,
    Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
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
        // eslint-disable-next-line react/no-unused-state
        username: '',
        // eslint-disable-next-line react/no-unused-state
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
                            <Grid xs={12}>
                                <TextField
                                  id="outlined-email-input"
                                  label="Email Address"
                                  className={classNames({
                                      [classes.emailInputfieldStyles]: true,
                                    })}
                                  type="email"
                                  name="email"
                                  autoComplete="email"
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
                                />
                                <TextField
                                  id="customer-first-name"
                                  label="First Name"
                                  className={classNames({
                                      [classes.emailInputfieldStyles]: true,
                                    })}
                                />
                                <TextField
                                  id="customer-last-name"
                                  className={classes.emailInputfieldStyles}
                                  label="Last Name"
                                />
                            </Grid>
                            <Grid xs={12} alignItems="center" className={classes.buttonGroup}>
                                <Button variant="contained" color="primary" className={classes.button}>
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
