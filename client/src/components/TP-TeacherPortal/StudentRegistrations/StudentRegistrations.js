/* eslint-disable camelcase */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {
  Paper,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Table,
  Grid,
  Typography,
  CircularProgress,
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

class StudentRegistrations extends Component {
  state = {
    students: [],
  };

  componentWillMount = async () => {
    // Fetch participants related to Customer
    const req = await axios.get(`${ARIA_SERVER_URL}/teacher/student/registered`, {
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
      <CustomerPortalContainer userType={1}>
        <div className={classes.pageTitle}>
            <Typography component="h2" variant="h2" gutterBottom align="center">
              Student Registrations
            </Typography>
        </div>
        <Grid container justify="center" alignItems="center">
          <Paper className={classes.root}>
            { (students.length === 0) ? (
              <Grid container justify="center" alignItems="center">
                <CircularProgress color="primary" />
              </Grid>
            ) : (
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">First Name</TableCell>
                    <TableCell align="left">Last Name</TableCell>
                    <TableCell align="right">Event Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map(({
                    FirstName,
                    LastName,
                    EventName,
                  }) => (
                    <TableRow key={FirstName}>
                      <TableCell align="left">{FirstName}</TableCell>
                      <TableCell align="left">{LastName}</TableCell>
                      <TableCell align="right">{EventName}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </Paper>
        </Grid>
      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(StudentRegistrations);
