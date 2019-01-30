import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    // Avatar,
    Grid,
    Typography,
} from '@material-ui/core';

import Shell from '../Shell/Shell';


const styles = ({
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
});


function Website() {
    return (
        <Shell>
            <Grid container justify="center" alignItems="center">
                <Typography>
                    test
                </Typography>
            </Grid>
        </Shell>
  );
}

export default withStyles(styles)(Website);
