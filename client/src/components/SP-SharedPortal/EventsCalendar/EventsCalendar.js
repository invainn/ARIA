import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = theme => ({
    eventsCalendarContainer: {
        width: '100%',
        height: '85%',
    },
    eventsCalendar: {
        width: '75%',
        height: '75%',
    },
    pageTitle: {
        width: '100%',
        textDecoration: 'underline',
        textDecorationColor: (theme.palette.type === 'light') ? '#000000' : '#FFFFFF',
        paddingBottom: '15px',
      },
});

const EventsCalendar = ({ classes, type }) => (
    <CustomerPortalContainer userType={type}>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              Events Calendar
          </Typography>
        </div>
        <Grid container justify="center" alignItems="flex-start" className={classes.eventsCalendarContainer}>
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
