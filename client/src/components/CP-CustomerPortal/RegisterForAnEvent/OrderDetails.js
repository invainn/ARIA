import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@material-ui/core';

/* const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];
*/

const styles = theme => ({
    listItem: {
        padding: `${theme.spacing.unit}px 0`,
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing.unit * 2,
    },
    orderSummaryContainer: {
        paddingBottom: '15px',
        width: '25vw',
    },
});

const OrderDetails = (props) => {
    const {
        classes,
        transactionDetails,
        students,
        event,
        totalPrice,
    } = props;

    const { transaction: { paymentInstrumentType, paypal } } = transactionDetails;

    const address = [];
    const payments = [];

    if (paymentInstrumentType === 'paypal_account') {
        payments.push({ name: 'PayPal Account', detail: paypal.payerEmail });
    }

    return (
        <div className={classes.orderSummaryContainer}>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <Divider />
            <List disablePadding>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={`${event.eventName} Registration`} secondary={`For ${students.length} students`} />
                    <Typography variant="body2">{`$${totalPrice}`}</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        ${totalPrice}
                    </Typography>
                </ListItem>
            </List>
            <Divider />
            <Grid container spacing={40}>
                { address.length > 0 && (
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom className={classes.title}>
                            Billing Address
                        </Typography>
                        <Typography gutterBottom>John Smith</Typography>
                        <Typography gutterBottom>{address.join(', ')}</Typography>
                    </Grid>
                )}
                <Grid item container direction="column">
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map(payment => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={10}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(OrderDetails);
