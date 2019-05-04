/* eslint-disable camelcase */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment-timezone';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Paper,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Table,
  Grid,
  Typography,
  Button,
  ListItemIcon,
  Icon,
} from '@material-ui/core';

import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

import ARIA_SERVER_URL from '../../../config';

const styles = theme => ({
  root: {
    width: '45vw',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  pageTitle: {
      width: '100%',
      textDecoration: 'underline',
      textDecorationColor: (theme.palette.type === 'light') ? '#000000' : '#FFFFFF',
      paddingBottom: '15px',
  },
  button: {
    margin: '10px',
  },
});

class MyEnrollments extends Component {
  state = {
    students: [],
  };

  componentWillMount = async () => {
    // Fetch participants related to Customer
    const req = await axios.get(`${ARIA_SERVER_URL}/customer/event/registration`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    });

    this.setState({ students: [...req.data] });
  };

  render() {
    const { students } = this.state;
    const { classes } = this.props;

    return (
      <CustomerPortalContainer>
        <div className={classes.pageTitle}>
            <Typography component="h2" variant="h2" gutterBottom align="center">
              My Enrollments
            </Typography>
        </div>
        <Grid container justify="center" alignItems="center">
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="right">Event Name</TableCell>
                  <TableCell align="right">Event Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map(({
                  FirstName,
                  LastName,
                  Name,
                  StartDate,
                }) => (
                  <TableRow key={FirstName}>
                    <TableCell align="left">{FirstName}</TableCell>
                    <TableCell align="left">{LastName}</TableCell>
                    <TableCell align="right">{Name}</TableCell>
                    <TableCell align="right">{moment(StartDate).tz('America/Los_Angeles').format('LLLL')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              component={Link}
              to="/customer/register-for-an-event"
            >
              <ListItemIcon>
                <Icon>add</Icon>
              </ListItemIcon>
              Register for another event
            </Button>
          </Paper>
        </Grid>
      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(MyEnrollments);
