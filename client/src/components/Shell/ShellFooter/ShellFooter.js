import React from 'react';
import {
withStyles,
Grid,
Typography,
} from '@material-ui/core';

const styles = ({ spacing, palette }) => ({
    footer: {
        padding: spacing.unit * 4,
        width: 'auto',
        backgroundColor: palette.secondary.main,
    },
});

const ShellFooter = ({ classes }) => (
    <footer className={classes.footer}>
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
