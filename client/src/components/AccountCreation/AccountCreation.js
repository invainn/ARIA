import React from 'react';
import {
    withStyles,
    Typography,
    Grid,
    TextField,
    Icon,
    Button,
} from '@material-ui/core';

import Bow from './bow.jpg';
import Shell from '../Shell/Shell';

const styles = theme => ({
    landing: {
        background: `url(${Bow}) no-repeat center center`,
        backgroundSize: 'cover',

        height: '100vh',
        width: '100%',
        position: 'relative',
    },

    landingContent: {
        background: 'rgba(55, 71, 79)',
        border: '3px solid brown',
        backgroundSize: 'contain',
        transition: 'all 1s',
        width: '40%',
        padding: 20,

        // Needed to offset the AppBar
        marginTop: 100,
    },

    landingCaption: {
        marginTop: 15,
        color: theme.palette.primary.contrastText,
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        color: theme.palette.primary.contrastText,
        width: '100%',
    },

    button: {
        marginTop: 25,
        marginLeft: 20,
        color: theme.palette.primary.contrastText,
    },

    loginIcons: {
        color: theme.palette.primary.contrastText,
    },

    iconTextHeight: {
        lineHeight: '75px',
        height: '85px',
    },
});


const AccountCreation = ({ classes }) => (
    <Shell>
        <Grid className={classes.landing} container justify="center" alignItems="center">
            <Grid className={classes.landingContent} container direction="column" justify="center" alignItems="center">

                <div className={classes.iconTextHeight}>
                    <Typography variant="title" align="center" color="textPrimary" className={classes.landingCaption}>
                        Northern Nevada Music Teacher Association
                    </Typography>

                    <Typography variant="body1" align="center" className={classes.landingCaption}>
                        Welcome to Account Registration!
                    </Typography>
                </div>

                <div className={classes.iconTextHeight}>
                    <Grid container spacing={12} alignItems="center" justify="space-evenly">
                        <Grid item xs={5}>
                            <TextField
                              label="First Name"
                              variant="outlined"
                              className={classes.textField}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                              label="Last Name"
                              variant="outlined"
                              className={classes.textField}
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.iconTextHeight}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Icon className={classes.loginIcons}>account_circle</Icon>
                        </Grid>
                        <Grid item>
                            <TextField
                              id="input-with-icon-grid"
                              label="Email"
                              autoComplete="email"
                              type="email"
                              variant="outlined"
                              helperText="Required *"
                              className={classes.textField}
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.iconTextHeight}>
                    <Grid container spacing={12} alignItems="center" justify="space-evenly">
                        <Grid item xs={1}>
                            <Icon className={classes.loginIcons}>vpn_key</Icon>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                              id="input-with-icon-grid"
                              className={classes.textField}
                              label="Password"
                              type="password"
                              variant="outlined"
                              helperText="Required *"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                              id="input-with-icon-grid"
                              className={classes.textField}
                              label="Verify Password"
                              type="password"
                              variant="outlined"
                              helperText="Required *"
                            />
                        </Grid>
                    </Grid>
                </div>

                <div>
                    <Grid container spacing={12} alignItems="flex-end">
                        <Grid item xs={6}>
                            <Button className={classes.button}>
                                Submit
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button className={classes.button}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </div>

            </Grid>
        </Grid>
    </Shell>
);

export default withStyles(styles)(AccountCreation);
