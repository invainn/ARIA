import React from 'react';
import {
    Grid,
    Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Shell from '../Shell/Shell';

const styles = theme => ({
    root: {

    },

    landingContent: {
        background: 'rgba(55, 71, 79, 0.3)',
    },

    margin: {
        margin: theme.spacing.unit,
    },
});

const AccountCreation = ({ classes }) => (
    <Shell>
        <Grid className={classes.root}>
            <Typography>
                Test
            </Typography>
        </Grid>
    </Shell>
);

export default withStyles(styles)(AccountCreation);
