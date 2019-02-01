import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

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
    subheadingTitle: {
      fontStyle: 'italic',
      paddingTop: '25px',
      width: '100%',
      fontWeight: 'normal',
      textDecorationColor: '#FFFFFF',
      paddingBottom: '15px',
    },
  });

const VolunteerSuccess = (props) => {
    const { classes } = props;

    return (
    <CustomerPortalContainer userType={2}>
      <div className={classes.pageTitle}>
        <Typography component="h2" variant="h2" gutterBottom align="center">
            You&apos;ve Volunteered Sucessfully!
        </Typography>
      </div>
      <div>
        <Typography>
            <h3 className={classes.subheadingTitle}>
                Below are the events you&apos;ve volunteered for
            </h3>
            <ol>
                <li>Event 1</li>
                <li>Event 2</li>
                <li>Event 3</li>
            </ol>
            <h3 className={classes.subheadingTitle}>
                To cancel a volunteer-registration contact &lt;admin-nnmta@example.com&gt;
            </h3>
        </Typography>
      </div>
    </CustomerPortalContainer>
    );
};

export default withStyles(styles)(VolunteerSuccess);
