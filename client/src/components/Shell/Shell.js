import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Button, Grid, Typography } from '@material-ui/core';
import logo from './logo-header.png';

const styles = (theme) => ({
    shellLogo: {
        maxWidth: 100,
        margin: 10,
    },

    logoContainer: {
        flex: 1,
    },

    footer: {
        padding: theme.spacing.unit * 6,
        width: "auto",
        backgroundColor: theme.palette.secondary.dark,
    },

    main: {
        flex: 1
    },

    layout: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
    }
});

class Shell extends Component {
    render() {

        const { classes } = this.props;

        return (
            <div className={classes.layout}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.logoContainer}>
                            <img variant="title" className={classes.shellLogo} src={logo} alt="NNMTA" />
                        </div>
                        <Button>Home</Button>
                        <Button>About</Button>
                        <Button>Competitions</Button>
                        <Button>Donate</Button>
                    </Toolbar>
                </AppBar>
                <main className={classes.main}>
                </main>
                <footer className={classes.footer}>
                    <Grid container justify="space-evenly" direction="row">
                        <Grid item xs>
                            <Typography variant="title" align="center" color="textPrimary" gutterBottom>
                                Site Map 
                            </Typography>
                            <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
                                Contact Us
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="title" align="center" color="textPrimary" gutterBottom>
                                Copyright
                            </Typography>
                            <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
                                Copyright © 2018 NNMTA 
                            </Typography>
                        </Grid>
                    </Grid>
                </footer>
            </div>
        );
    }
}

export default withStyles(styles)(Shell);