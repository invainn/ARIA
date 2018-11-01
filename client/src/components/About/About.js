import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    Typography,
    Grid,
    // TextField,
    // Button,
    // Icon,
    Divider,
} from '@material-ui/core';

import Shell from '../Shell/Shell';

const styles = ({ palette }) => ({
    background: {
        backgroundColor: palette.secondary.main,
        width: 'auto',
        height: '100vh',
    },

    header: {
        width: '20%',
        fontSize: '50em',
    },

    body: {
        padding: 20,
    },

    inline: {
        width: 1280,
    },
});

const About = ({ classes }) => (
    <Shell>
        <div className={classes.background}>
            <Grid container>
                <Grid xs={4} className={classes.header} textItems="center">
                    <Typography>
                        About Us
                    </Typography>
                </Grid>
                <Grid xs={8} className={classes.body}>
                    <Typography>
                        This is the body of the text
                    </Typography>
                </Grid>
            </Grid>
            <Divider className={classes.inline} alignItems="center" inset />
        </div>
    </Shell>
);

About.propTypes = {
    classes: PropTypes.objectOf(
        PropTypes.node,
    ),
};

About.defaultProps = {
    classes: {},
};

export default withStyles(styles)(About);
