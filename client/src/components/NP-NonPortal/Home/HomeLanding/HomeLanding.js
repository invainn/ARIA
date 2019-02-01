import React from 'react';
import {
    withStyles,
    Grid,
    Typography,
    Button,
} from '@material-ui/core';

import Violin from './violin.jpg';
import Logo from '../../Shell/logo-header.png';

const styles = () => ({
    landing: {
        background: `url(${Violin}) no-repeat center center`,
        backgroundSize: 'cover',

        height: '100vh',
        width: '100%',
        position: 'relative',

        // Needed to offset the AppBar
        marginTop: -74,
    },

    landingContent: {
        background: 'rgba(0, 0, 0, 0.1)',
        backgroundSize: 'contain',
        width: '75%',

        padding: 20,
    },

    landingButton: {
        marginTop: 20,
    },

    landingLogo: {
        width: '50%',
    },

    landingCaption: {
        marginTop: 15,
    },
});


const HomeLanding = ({ classes }) => (
    <Grid className={classes.landing} container justify="center" alignItems="center">
        <Grid className={classes.landingContent} container direction="column" justify="center" alignItems="center">
            <img src={Logo} className={classes.landingLogo} alt="NNMTA" />
            <Typography variant="title" align="center" color="textPrimary" className={classes.landingCaption}>
                Northern Nevada Music Teacher Association
            </Typography>
            <Button color="primary" variant="contained" className={classes.landingButton}>
                Donate Today!
            </Button>
        </Grid>
    </Grid>
);

export default withStyles(styles)(HomeLanding);
