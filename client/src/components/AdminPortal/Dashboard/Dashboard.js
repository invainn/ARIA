import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// Stop individually importing components
// Do it like this
import {
  ListItemIcon,
  Icon,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

// This needs to be described more
import MusicNoteImage from './dashboard-music-note.jpg';
import AdminPortalContainer from '../../../containers/Shell/AdminPortal/AdminPortalContainer';

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 10}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  buttonStyle: {
    justifyContent: 'center',
  },
  dashboardTitle: {
    textDecoration: 'underline',
  },
});


function AdminDashboard(props) {
  const { classes } = props;

  // Stop doing global variables
  // Everything should be in a function or import
  const cards = [
    1,
    2,
    3,
    4,
  ];

  return (
    <AdminPortalContainer>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.dashboardTitle}>
              Dashboard Layout
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Something short and leading about NNMTA. Brief but interesting
              so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    <ListItemIcon>
                      <Icon style={{ color: '#FFFFFF' }}>notifications_active</Icon>
                    </ListItemIcon>
                    NNMTA Notifications
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                  <ListItemIcon>
                      <Icon style={{ color: '#FFFFFF' }}>view_headline</Icon>
                  </ListItemIcon>
                    NNMTA News
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={MusicNoteImage}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      NNMTA Admin Dashboard Action
                    </Typography>
                    <Typography>
                      This section describes the content for something admin-related.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="medium" color="primary">
                    <ListItemIcon>
                      <Icon style={{ color: '#FFFFFF' }}>pageview</Icon>
                    </ListItemIcon>
                      View
                    </Button>
                    <Button variant="contained" size="medium" color="primary">
                    <ListItemIcon>
                      <Icon style={{ color: '#FFFFFF' }}>close</Icon>
                    </ListItemIcon>
                      Hide
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </AdminPortalContainer>
  );
}

export default withStyles(styles)(AdminDashboard);
