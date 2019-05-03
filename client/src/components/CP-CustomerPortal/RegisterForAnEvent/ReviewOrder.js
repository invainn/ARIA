import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    Grid,
    Divider,
} from '@material-ui/core';

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
        width: '25vw',
    },
});

const ReviewOrder = (props) => {
    const {
        classes,
        totalPrice,
        students,
        event,
    } = props;

    return (
        <Grid className={classes.orderSummaryContainer}>
            <Typography variant="h6" gutterBottom>
                Review Order
            </Typography>
            <Divider />
            <List disablePadding>
                <ListItem className={classes.listItem}>
                    <ListItemText primary={`${event.Name} Registration`} secondary={`For ${students.length} students`} />
                    <Typography variant="body2">{`$${totalPrice}`}</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        ${totalPrice}
                    </Typography>
                </ListItem>
            </List>
        </Grid>
    );
};

export default withStyles(styles)(ReviewOrder);
