import React, { Component } from 'react';
import {
    withStyles,
    Typography,
} from '@material-ui/core';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = () => ({
    root: {
        width: '100%',
    },
});

class SelectFile extends Component {
    state = {

    };

    render() {
        return (
            <CustomerPortalContainer userType={0}>
                <Typography>
                    Testing
                </Typography>
            </CustomerPortalContainer>
        );
    }
}

export default withStyles(styles)(SelectFile);
