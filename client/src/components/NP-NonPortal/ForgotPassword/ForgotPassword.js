import React from 'react';
import Keyboard from './keyboard.jpg';
import Shell from '../Shell/Shell';
import {
    withStyles,
    Typography,
    Grid,
    TextField,
    Button,
} from '@material-ui/core';
import classNames from 'classnames';

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
        margin: theme.spacing.unit,
        color: '#FFFFFF',
        textAlign: 'center',
        width: '30%',
        display: 'block',
        margin: '0px auto 0px auto',
    },

    loginIcons: {
        color: theme.palette.primary.contrastText,
    },

    fieldText: {
        color: theme.palette.primary.contrastText,
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
    placeHolderStyles: {
        color: '#FFFFFF',
    }
});


class ForgotPassword extends React.Component {
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
                        <Typography variant="body1" align="center" className={classNames({[classes.landingCaption]: true, [classes.infoMessageStyles]: true})}>
                            Forgot your password? Don't worry, resetting your password is easy!
                        </Typography>
                        <Typography variant="body1" align="center" className={classNames({[classes.landingCaption]: true, [classes.infoMessageStyles]: true})}>
                            Enter your email below, click "Submit", and we will send instructions to your email to reset your password.
                        </Typography>
                        <Grid container justify="center" align="center">
                            <Grid xs={12}>
                                <TextField
                                id="outlined-email-input"
                                label="Enter Your Email Address Here"
                                className={classNames({[classes.textField]: true, [classes.emailInputfieldStyles]: true})}
                                type="email"
                                name="email"
                                autoComplete="email"
                                variant="outlined"
                                />
                            </Grid>
                            <Grid xs={12} alignItems="center">
                                <Button variant="contained" color="primary" className={classes.button}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Shell>
        );
    }
}

export default withStyles(styles)(ForgotPassword);
