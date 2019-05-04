/* eslint-disable camelcase */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import * as Yup from 'yup';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import {
    Formik,
    Form,
    Field,
} from 'formik';
import {
  TextField,
  Select,
} from 'formik-material-ui';

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
  formButton: {
    margin: '28px 0 15px 10px',
  },
  form: {
    padding: '0 24px 0 24px',
  },
  field: {
    marginTop: '24px',
  },
});

const ParticipantSchema = Yup.object().shape({
  FirstName: Yup.string().required('Required'),
  LastName: Yup.string().required('Required'),
  Teacher: Yup.number().required('Required'),
});

class MyParticipants extends Component {
  state = {
    open: false,
    teachers: [],
    students: [],
  };

  initialValues = {
    FirstName: '',
    LastName: '',
    Teacher: null,
  };

  updateParticipantsTable = async () => {
    // Fetch participants related to Customer
    const req = await axios.get(`${ARIA_SERVER_URL}/customer/participant`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    });

    this.setState({ students: [...req.data] });
  }

  componentWillMount = async () => {
    await this.updateParticipantsTable();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  onSubmit = async ({ FirstName, LastName, Teacher }, { resetForm }) => {
    await axios.post(`${ARIA_SERVER_URL}/customer/participant`,
      {
        FirstName,
        LastName,
        TeacherID: Teacher,
      },
      {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    });

    resetForm();

    this.handleClose();
    await this.updateParticipantsTable();
  };

  onDialogEnter = async () => {
    const req = await axios.get(`${ARIA_SERVER_URL}/customer/teacher`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    });

    this.setState({ teachers: [...req.data] });
  };

  render() {
    const { open, teachers, students } = this.state;
    const { classes } = this.props;

    return (
      <CustomerPortalContainer>
        <div className={classes.pageTitle}>
            <Typography component="h2" variant="h2" gutterBottom align="center">
              My Participants
            </Typography>
        </div>
        <Grid container justify="center" alignItems="center">
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="right">Teacher</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map(({
                  FirstName,
                  LastName,
                  TeacherName,
                }) => (
                  <TableRow key={FirstName}>
                    <TableCell align="left">{FirstName}</TableCell>
                    <TableCell align="left">{LastName}</TableCell>
                    <TableCell align="right">{TeacherName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button color="primary" variant="contained" className={classes.button} onClick={this.handleOpen}>
              Add New Participant
            </Button>
            <Dialog open={open} onClose={this.handleClose} onEnter={this.onDialogEnter}>
              <DialogTitle>Add New Participant</DialogTitle>
              <DialogContent style={{ padding: '0 24px 0' }}>
                <DialogContentText>
                  Enter all information for the new participant.
                </DialogContentText>
              </DialogContent>
              <Formik
                onSubmit={this.onSubmit}
                initialValues={this.initialValues}
                validationSchema={ParticipantSchema}
              >
                {({ submitForm, isSubmitting }) => (
                  <Form>
                    <Grid container justify="flex-start" alignItems="flex-start" direction="column" className={classes.form}>
                      <Field
                        component={TextField}
                        name="FirstName"
                        label="First Name"
                        className={classes.field}
                      />
                      <Field
                        component={TextField}
                        name="LastName"
                        label="Last Name"
                        className={classes.field}
                      />
                      <FormControl className={classes.field}>
                        <InputLabel shrink htmlFor="Teacher">
                          Teacher
                        </InputLabel>
                        <Field
                          component={Select}
                          name="Teacher"
                        >
                          { teachers.map(({ id, first_name, last_name }) => <MenuItem key={id} value={id}>{`${first_name} ${last_name}`}</MenuItem>)}
                        </Field>
                      </FormControl>
                      <Grid container direction="row" justify="flex-end">
                        <Button color="secondary" variant="contained" onClick={this.handleClose} className={classes.formButton} disabled={isSubmitting}>
                          Cancel
                        </Button>
                        <Button color="primary" variant="contained" onClick={submitForm} className={classes.formButton} disabled={isSubmitting}>
                          Add
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Dialog>
          </Paper>
        </Grid>
      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(MyParticipants);
