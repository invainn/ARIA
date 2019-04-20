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
    maxWidth: '90%',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardGrid: {
    padding: '40px 0px 0px 0px',
  },
  card: {
    minWidth: '250px',
    maxWidth: '380px',
    width: '100%',
    minHeight: '280px',
    maxHeight: '280px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0px 0px 0px 0px',
    margin: '0px 0px 0px 0px',
    '&:hover': {
      transform: 'scale(1.10);',
      transition: 'all 1s',
    },
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'center',
    justifyContent: 'left',
    padding: '0px 0px 0px 0px',
    marginBottom: '0px',
  },
  buttonStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    minWidth: '480px',
    height: '100%',
    minHeight: '65px',
    padding: '0px auto',
    marginBottom: '0px',
  },
  dashboardTitle: {
    textDecoration: 'underline',
  },
  cardTitle: {
    paddingTop: '10px',
    paddingBottom: '0px',
    textDecoration: 'underline',
    minHeight: '72px',
  },
  descriptionStyles: {
    minHeight: '110px',
    padding: '0px 10px 0px 10px',
    height: '100%',
  },
});


function Dashboard(props) {
  const { classes, type, name } = props;

  // Stop doing global variables
  // Everything should be in a function or import

  /* ADMIN-PORTAL */
  if (type === 2) {
    return (
      <CustomerPortalContainer userType={type}>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.dashboardTitle}>
                {`Welcome, ${name}`}
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Very interesting statement
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
                <Grid item key={adminCard.id} sm={12} md={6} lg={4} xl={3} align="center">
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
  if (type === 1) {
    return (
      <CustomerPortalContainer userType={type}>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.dashboardTitle}>
                {`Welcome, ${name}`}
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
                <Grid item key={teacherCard.id} sm={12} md={6} lg={4} xl={3} align="center">
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                        {teacherCard.title}
                      </Typography>
                      <br />
                      <Typography className={classes.descriptionStyles}>
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
    <CustomerPortalContainer userType={0}>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.dashboardTitle}>
              {`Welcome, ${name}`}
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
              <Grid item key={customerCard.id} sm={12} md={6} lg={4} xl={3} align="center">
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                      {customerCard.title}
                    </Typography>
                    <br />
                    <Typography className={classes.descriptionStyles}>
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
