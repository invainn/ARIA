import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
} from '@material-ui/core';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

const styles = theme => ({
    panel: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    pageTitle: {
      width: '100%',
      textDecoration: 'underline',
      textDecorationColor: '#FFFFFF',
      paddingBottom: '15px',
    },
  });

const PaymentHistory = (props) => {
    const { classes } = props;

    return (
        <CustomerPortalContainer>
            <div className={classes.pageTitle}>
                <Typography
                  component="h2"
                  variant="h2"
                  gutterBottom
                  align="center"
                >
                    Payment History: Current and Past Events
                </Typography>
            </div>
        </CustomerPortalContainer>
    );
};

export default withStyles(styles)(PaymentHistory);
