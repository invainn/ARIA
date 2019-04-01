import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Paper,
  Typography,
  ListItemIcon,
  Icon,
} from '@material-ui/core';

import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = theme => ({
  root: {
    flexGrow: 2,
    width: '75%%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
  },
  button: {
    margin: theme.spacing.unit,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '47%',
    paddingRight: '14px',
  },
  secondaryButton: {
    margin: theme.spacing.unit,
    justifyContent: 'center',
    marginLeft: '44%',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: (theme.palette.type === 'light') ? '#000000' : '#FFFFFF',
    paddingBottom: '15px',
  },
  document: {
    marginLeft: 7,
    marginTop: 5,
  },
});

class AddATeacher extends Component {
  state = {
  };

  handleChange = () => {
    this.setState({});
  };

  render() {
    const { classes } = this.props;

    return (
      <CustomerPortalContainer userType={0}>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              Add A Teacher
          </Typography>
        </div>
        <Paper className={classes.root}>
          <Typography variant="h6" align="center">
              Please upload a CSV file containing the list of participating teachers.
          </Typography>
        </Paper>

        <Paper className={classes.document}>
          <div>
              <Typography variant="h5" align="center">
                  CSV Music File*
              </Typography>
              <Typography variant="body6" align="center">
                  The CSV file should be in the following format: <br />
                  Last Name, First Name, School
              </Typography>
          </div>

          <div>
              <Button variant="contained" color="default" className={classes.button}>
                  Upload
              </Button>
              <Button variant="contained" color="default" className={classes.button}>
                  Download
              </Button>
          </div>

          <div>
              <Button variant="contained" className={classes.secondaryButton} color="primary">
                  <ListItemIcon>
                  <Icon>save</Icon>
                  </ListItemIcon>
                      Save Changes
              </Button>
          </div>
        </Paper>

      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(AddATeacher);
