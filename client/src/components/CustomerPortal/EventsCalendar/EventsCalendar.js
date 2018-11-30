import React from 'react';
import {
    Grid,
    Typography,
    withStyles,
} from '@material-ui/core';

import CustomerPortalContainer from '../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

const styles = () => ({
    eventsCalendarContainer: {
        width: '100%',
        height: '85%',
    },
    eventsCalendar: {
        width: '100%',
        height: '100%',
    },
    pageTitle: {
        width: '100%',
        textDecoration: 'underline',
        textDecorationColor: '#FFFFFF',
        paddingBottom: '15px',
      },
});

const EventsCalendar = ({ classes }) => (
    <CustomerPortalContainer>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              Events Calendar
          </Typography>
        </div>
        <Grid container justify="center" alignItems="center" className={classes.eventsCalendarContainer}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles"
              frameBorder="0"
              scrolling="no"
              title="EventsCalendar"
              className={classes.eventsCalendar}
            />
        </Grid>
    </CustomerPortalContainer>
);

export default withStyles(styles)(EventsCalendar);
