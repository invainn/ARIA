import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// Stop individually importing components
// Do it like this
import {
  ListItemIcon,
  Icon,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';

import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';
import adminCards from './adminCards';
import customerCards from './customerCards';
import teacherCards from './teacherCards';

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 900,
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
    [theme.breakpoints.up(1920 + theme.spacing.unit * 3 * 2)]: {
      width: 1920,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 10}px 0`,
  },
  card: {
    maxHeight: '500px',
    maxWidth: '350px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '&:hover': {
      transform: 'scale(1.10);',
      transition: 'all 1s',
    },
    padding: '10px 10px 10px 10px',
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'center',
    justifyContent: 'left',
    padding: '10px 0px 0px 0px',
    marginBottom: '0px',
  },
  buttonStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    minHeight: '85px',
    padding: '0px auto',
    marginBottom: '0px',
  },
  dashboardTitle: {
    textDecoration: 'underline',
  },
  cardTitle: {
    textDecoration: 'underline',
    minHeight: '85px',
  },
  descriptionStyles: {
    minHeight: '110px',
    height: '100%',
  },
});


function Dashboard(props) {
  const { classes, userType = 1 } = props;

  // Stop doing global variables
  // Everything should be in a function or import

  /* ADMIN-PORTAL */
  if (userType === 0) {
    return (
      <CustomerPortalContainer userType={userType}>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.dashboardTitle}>
              Welcome &lt;Admin&apos;s Name&gt;
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
            <Grid container spacing={40} alignItems="center">
              {adminCards.map(adminCard => (
                <Grid item key={adminCard.id} sm={12} md={6} lg={3} xl={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                        {adminCard.title}
                      </Typography>
                      <br />
                      <Typography className={classes.descriptionStyles}>
                      {adminCard.description}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardContent}>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.buttonStyle}
                        component={Link}
                        to={adminCard.link}
                      >
                      <ListItemIcon>
                        <Icon style={{ color: '#FFFFFF' }}>{adminCard.icon}</Icon>
                      </ListItemIcon>
                        {adminCard.buttonName}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
      </CustomerPortalContainer>
    );
  }

  /*  TEACHER-PORTAL */
  if (userType === 2) {
    return (
      <CustomerPortalContainer userType={userType}>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.dashboardTitle}>
              Welcome &lt;Teacher&apos;s Name&gt;
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
            <Grid container spacing={40} alignItems="center">
              {teacherCards.map(teacherCard => (
                <Grid item key={teacherCard.id} sm={12} md={6} lg={4} xl={3}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                        {teacherCard.title}
                      </Typography>
                      <br />
                      <Typography>
                      {teacherCard.description}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardContent}>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.buttonStyle}
                        component={Link}
                        to={teacherCard.link}
                      >
                      <ListItemIcon>
                        <Icon style={{ color: '#FFFFFF' }}>{teacherCard.icon}</Icon>
                      </ListItemIcon>
                        {teacherCard.buttonName}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
      </CustomerPortalContainer>
    );
  }

  /* CUSTOMER-PORTAL */
  return (
    <CustomerPortalContainer userType={userType}>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.dashboardTitle}>
              Welcome &lt;Customer&apos;s Name&gt;
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
          <Grid container spacing={40} alignItems="center">
            {customerCards.map(customerCard => (
              <Grid item key={customerCard.id} sm={12} md={6} lg={4} xl={3}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                      {customerCard.title}
                    </Typography>
                    <br />
                    <Typography>
                    {customerCard.description}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardContent}>
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      className={classes.buttonStyle}
                      component={Link}
                      to={customerCard.link}
                    >
                    <ListItemIcon>
                      <Icon style={{ color: '#FFFFFF' }}>{customerCard.icon}</Icon>
                    </ListItemIcon>
                      {customerCard.buttonName}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </CustomerPortalContainer>
  );
}

export default withStyles(styles)(Dashboard);
