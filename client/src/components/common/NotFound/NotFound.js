import React from 'react';
import {Link} from 'react-router-dom';
import {
    withStyles,
    Button,
} from '@material-ui/core';
import './NotFound.css'

const styles = () => ({
    buttonColor: {
        color: 'white',
        backgroundColor: 'brown',
        textDecorationColor: 'white',       
    },
    LinkColor: {
        color: 'white',
    }
});

const NotFound = ({ classes }) => (
    <div className="nf">
        <div className="notfound">
            <div className="notfound-404">
                <h3>Oops! Page not found</h3>
                <h1><span>4</span><span>0</span><span>4</span></h1>
            </div>
            <h2>we are sorry, but the page you requested was not found</h2>
            <center>
                <Button color="primary" variant="raised" className={classes.buttonColor}>
                    <Link className={classes.LinkColor} to="/">Return to Home Page</Link>
                </Button>
            </center>
        </div>
    </div>
);

export default withStyles(styles)(NotFound);
