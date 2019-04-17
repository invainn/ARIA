import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Paper,
    Grid,
    Button,
    Icon,
    // Typography,
} from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '790px',
        minWidth: '790px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px 20px 20px 20px',
    },
    button: {
        margin: theme.spacing.unit,
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    icon: {
        display: 'inline-block',
        marginRight: '7px',
    },

});

class SelectFileType extends Component {
    state = {

    };

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="default" className={classes.button}>
                        <Icon className={classes.icon}>cloud_download</Icon>
                        Download
                    </Button>
                </Grid>
                {/*
                This is meant to open the files selected using the browsers native print friendly
                functions
                */}
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="default" className={classes.button}>
                        <Icon className={classes.icon}>print</Icon>
                        Print
                    </Button>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(SelectFileType);
