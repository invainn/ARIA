import React from 'react';
import {
    withStyles,
    Typography,
    Grid,
    TextField,
    Button,
} from '@material-ui/core';
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
        background: 'rgba(55, 71, 79)',
        border: '3px solid brown',
        backgroundSize: 'contain',
        transition: 'all 1s',
        width: '35%',
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
        color: '#FFFFFF',
        textAlign: 'center',
        width: '44%',
        display: 'block',
        verticalAlign: 'text-top',
        height: '100%',
        margin: '0px auto 0px auto',
        maxWidth: '233.27px',
    },

    loginIcons: {
        color: theme.palette.primary.contrastText,
    },

    fieldText: {
        color: theme.palette.primary.contrastText,
    },
    infoMessageStyles: {
        width: ' 80%',
        textAlign: 'center',
    },
    emailInputfieldStyles: {
        marginTop: '10px',
        marginBottom: '10px',
        padding: '10px 0px 10px 0px',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    placeHolderStyles: {
        color: '#FFFFFF',
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
                                      [classes.textField]: true,
                                      [classes.emailInputfieldStyles]: true,
                                    })}
                                  type="email"
                                  name="email"
                                  autoComplete="email"
                                  variant="outlined"
                                />
                                <TextField
                                  id="outlined-password-input"
                                  label="Password"
                                  className={classNames({
                                      [classes.textField]: true,
                                    [classes.emailInputfieldStyles]: true,
                                })}
                                  type="password"
                                  name="password"
                                  autoComplete="password"
                                  variant="outlined"
                                />
                                <TextField
                                  id="customer-first-name"
                                  label="First Name"
                                  className={classNames({
                                      [classes.textField]: true,
                                      [classes.emailInputfieldStyles]: true,
                                    })}
                                  variant="outlined"
                                />
                                <TextField
                                  id="customer-last-name"
                                  label="Last Name"
                                  className={classNames({
                                      [classes.textField]: true,
                                      [classes.emailInputfieldStyles]: true,
                                    })}
                                  variant="outlined"
                                />
                            </Grid>
                            <Grid xs={12} alignItems="center">
                                <Button variant="contained" color="primary" className={classes.button}>
                                    Create Account
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Shell>
        );
    }
}

export default withStyles(styles)(RegisterNewUser);
