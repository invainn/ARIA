import React, { Component } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import DropIn from 'braintree-web-drop-in-react';
import { withStyles } from '@material-ui/core/styles';
import {
    Typography,
    CircularProgress,
} from '@material-ui/core';

import ARIA_SERVER_URL from '../../../config';

const styles = () => ({
    dropIn: {
        margin: 'auto',
        maxWidth: '650px',
    },
    tooltips: {
        margin: 'auto',
        maxWidth: '650px',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class EventPayment extends Component {
    componentDidMount = async () => {
        const { handleClientToken } = this.props;

        // Fetching client token for BrainTree
        const res = await axios.get(`${ARIA_SERVER_URL}/payment/token`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            },
        });

        handleClientToken(res.data);
    };

    instance;

    render() {
        const { classes, clientToken } = this.props;
        // const { orderButtonDisabled } = this.state;
        const fraudURL = 'https://www.braintreepayments.com/features/fraud-protection';

        if (clientToken === null) {
            return <CircularProgress size={40} />;
        }

        return (
            <div>
                <div className={classes.dropIn}>
                    <DropIn
                      options={{
                            authorization: clientToken,
                            paypal: {
                                flow: 'checkout',
                                amount: '0.01',
                                currency: 'USD',
                            },
                      }}
                      // eslint-disable-next-line no-return-assign
                      onInstance={instance => (this.instance = instance)}
                    />
                </div>

                <div className={classes.tooltips}>
                    <Typography className={classes.text} variant="caption">
                        What is BrainTree? BrainTree is a service offered by PayPal
                        so it is the same interface NNMTA members currently use. <br />
                        <a href={fraudURL} rel="noopener noreferrer" target="_blank">
                            If you would like to find out more!
                        </a>
                    </Typography>
                </div>
                <div id="paypal-button" />
            </div>
        );
    }
}

export default withStyles(styles)(EventPayment);
