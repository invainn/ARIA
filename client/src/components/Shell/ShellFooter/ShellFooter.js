import React from 'react';
import { withStyles } from "@material-ui/core";
import { Grid, Typography } from '@material-ui/core';

const styles = (theme) => ({
    footer: {
        padding: theme.spacing.unit * 4,
        width: 'auto',
        backgroundColor: theme.palette.secondary.main,
    },
});

const ShellFooter = (props) => (
    <footer className={props.classes.footer}>
        <Grid container justify="space-evenly" direction="row">
            <Grid item>
                <Typography variant="subheading" align="center" color="textPrimary" gutterBottom>
                    Site Map 
                </Typography>
                <Typography variant="caption" align="center" color="textSecondary" gutterBottom>
                    Contact Us
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="subheading" align="center" color="textPrimary" gutterBottom>
                    Copyright
                </Typography>
                <Typography variant="caption" align="center" color="textSecondary" gutterBottom>
                    Copyright © 2018 NNMTA 
                </Typography>
            </Grid>
        </Grid>
    </footer>
);

export default withStyles(styles)(ShellFooter);