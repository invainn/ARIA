/* eslint-disable import/no-unresolved */
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
import Shell from '../Shell/Shell';
import Keyboard from './keyboard.jpg';

const styles = theme => ({
    landing: {
        background: `url(${Keyboard}) no-repeat center center`,
        backgroundSize: '100% 100%',

        height: '100vh',
        width: '100%',
        position: 'relative',

        // Needed to offset the AppBar
        marginTop: -100,
    },

    landingContent: {
        background: (theme.palette.type === 'dark') ? '#000000' : '#FFFFFF',
        border: '3px solid brown',
        backgroundSize: 'contain',
        transition: 'all 1s',
        width: '450px',
        padding: 20,
        marginTop: '21.5vh',
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
        margin: '0px auto 10px auto',
        maxWidth: '150px',
    },
    infoMessageStyles: {
        width: ' 70%',
        textAlign: 'center',
    },
    emailInputfieldStyles: {
        marginTop: '10px',
        marginBottom: '10px',
        padding: '10px 0px 10px 0px',
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});


class ForgotPassword extends React.Component {
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
                          className={
                                classNames({
                                    [classes.landingCaption]: true,
                                    [classes.infoMessageStyles]: true,
                                })}
                        >
                            Forgot your password? Don&apos;t worry, resetting your password is easy!
                        </Typography>
                        <Typography
                          variant="body1"
                          align="center"
                          className={
                                classNames({
                                    [classes.landingCaption]: true,
                                    [classes.infoMessageStyles]: true,
                                })}
                        >
                            Enter your email below, click &quot;Submit&quot;, and
                            we will send instructions to your email to reset your
                            password.
                        </Typography>
                        <Grid container justify="center" align="center">
                            <Grid xs={12}>
                                <TextField
                                  id="outlined-email-input"
                                  label="Enter Your Email Address Here"
                                  className={
                                      classNames({
                                          [classes.textField]: true,
                                          [classes.emailInputfieldStyles]: true,
                                      })}
                                  type="email"
                                  name="email"
                                  autoComplete="email"
                                />
                            </Grid>
                            <Grid xs={12} alignItems="center">
                                <Button variant="contained" color="primary" className={classes.button}>
                                    Submit
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

export default withStyles(styles)(ForgotPassword);
