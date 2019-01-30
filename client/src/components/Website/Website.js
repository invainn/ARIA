import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    // Avatar,
    Grid,
    Typography,
} from '@material-ui/core';

import Shell from '../Shell/Shell';


const styles = ({
    pageTitle: {
        paddingBottom: '15px',
    },

    bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
});


function Website() {
    return (
        <Shell>
            <Grid justify="center" alignItems="center">
                <Typography variant="h1">
                    Project ARIA
                </Typography>
            </Grid>
        </Shell>
  );
}

export default withStyles(styles)(Website);
