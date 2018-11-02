import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CustomerPortalContainer from '../../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

const styles = () => ({
    eventsCalendarContainer: {
        width: '100%',
        height: '90%',
    },
    eventsCalendar: {
        width: '100%',
        height: '100%',
    },
});

const EventsCalendar = ({ classes }) => (
    <CustomerPortalContainer>
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

EventsCalendar.propTypes = {
    classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(EventsCalendar);
