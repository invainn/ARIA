import React from 'react';
import { Grid, Typography, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core';
import Violin from './violin.jpg'
import Logo from '../../Shell/logo-header.png';

const styles = () => ({
    landing: {
        backgroundImage: `url(${Violin})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat',
        height: '66.7vw',
        width: '100vw',
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
        marginTop: 15 ,
    },
});


const HomeLanding = (props) => (
    <Grid className={props.classes.landing} container justify="center" alignItems="center">
        <Grid className={props.classes.landingContent} container direction="column" justify="center" alignItems="center">
            <img src={Logo} className={props.classes.landingLogo} alt="NNMTA" />
            <Typography variant="body1" align="center" color="textPrimary" className={props.classes.landingCaption}>
                Northern Nevada Music Teacher Association
            </Typography>
            <Button color="primary" variant="contained" className={props.classes.landingButton}>
                Donate Today!
            </Button>
        </Grid>
    </Grid>
);

export default withStyles(styles)(HomeLanding);