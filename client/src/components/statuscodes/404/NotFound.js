import React from 'react';
import { Link } from 'react-router-dom';
import {
    withStyles,
    Button,
} from '@material-ui/core';

 const buttonStyle = {
    color: '#FFFFFF',
};
 const linkStyle = {
    color: '#FFFFFF',
    textDecorationColor: '#FFFFFF',
};
 const nf = {
    boxSizing: 'border-box',
    position: 'absolute',
    height: '100vh',
    left: '50%',
    top: '25%',
    transform: 'translate(-50%, -50%)',
};
 const notfound = {
    position: 'relative',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'sans-serif',
    maxWidth: '620px',
    width: '100%',
    lineHeight: 1.4,
    textAlign: 'center',
    height: '240px',
    '@media only screen and (max-width: 767px)': {
        height: '200px',
        fontSize: '200px',
    },
    '@media only screen and (max-width: 480px)': {
        height: '162px',
    },
};
 const h1Style = {
    fontFamily: 'sans-serif',
    fontSize: '252px',
    fontWeight: '900',
    margin: '0px',
    color: '#262626',
    textTransform: 'uppercase',
    letterSpacing: '-40px',
    marginLeft: '-20px',
    textShadow: '-8px 0px 0px #fff',
    '@media only screen and (max-width: 767px)': {
        fontSize: '200px',
        height: '162px',
    },
    '@media only screen and (max-width: 480px)': {
        fontSize: '162px',
        height: '150px',
        lineHeight: '162px',
    },
};
 const h2Style = {
    fontFamily: 'sans-serif',
    fontSize: '20px',
    fontWeight: '400',
    textTransform: 'uppercase',
    color: '#000',
    marginTop: '0px',
    marginBottom: '56px',
    '@media only screen and (max-width: 480px)': {
        fontSize: '16px',
    },
};
 const h3Style = {
    fontFamily: 'sans-serif',
    position: 'relative',
    fontSize: '18px',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#262626',
    margin: 'auto',
    letterSpacing: '3px',
    verticalAlign: 'middle',
    textAlign: 'center',
};
 const NotFound = () => (
    <div style={nf}>
        <div style={notfound}>
            <div>
                <h3 style={h3Style}>Oops! Page not found</h3>
                <h1 style={h1Style}><span>4</span><span>0</span><span>4</span></h1>
            </div>
            <h2 style={h2Style}>
                <span>something went wrong, the page you requested was not found</span>
            </h2>
            <center>
                <Button color="primary" variant="raised" style={buttonStyle}>
                    <Link color="primary" style={linkStyle} to="/">Return to Home Page</Link>
                </Button>
            </center>
        </div>
    </div>
);

export default withStyles()(NotFound);
