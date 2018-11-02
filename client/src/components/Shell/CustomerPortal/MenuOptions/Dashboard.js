import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import image from './images/dashboard-music-note.jpg';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

function Dashboard(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
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
                      <Icon>notifications_active</Icon>
                    </ListItemIcon>
                    NNMTA Notifications
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                  <ListItemIcon>
                      <Icon>view_headline</Icon>
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
                    image={image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      NNMTA Customer Dashboard Action
                    </Typography>
                    <Typography>
                      This section describes the content for something customer-related.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="medium" color="primary">
                    <ListItemIcon>
                      <Icon>pageview</Icon>
                    </ListItemIcon>
                      View
                    </Button>
                    <Button variant="contained" size="medium" color="primary">
                    <ListItemIcon>
                      <Icon>close</Icon>
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
    </React.Fragment>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Dashboard);
