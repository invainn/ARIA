import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Icon,
  TextField,
  Button,
  Paper,
  Typography,
  Grid,
} from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountFields from './AccountFields';
import CustomerPortalContainer from '../../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

const styles = theme => ({
  root: {
    flexGrow: 2,
    width: '75%%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
  },
  button: {
    margin: theme.spacing.unit,
    borderRadius: '5px',
  },
  input: {
    display: 'none',
    borderRadius: '5px',
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: '#FFFFFF',
    paddingBottom: '15px',
  },
});

class CreateEvent extends React.Component {
  state = {
  };

  handleChange = () => {
    this.setState({});
  };

  render() {
    const { classes } = this.props;

    return (
      <CustomerPortalContainer>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              Create an Event
          </Typography>
        </div>
        <Paper className={classes.root}>
          <Typography variant="h6" align="center">
              Welcome! Please submit information for all of the fields in the form below in
              order to create a new NNMTA music event.
          </Typography>
        </Paper>

    {/* <TabContainer> */}
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid xs={12}>
            <AccountFields label="Event Name*" placeholder="Desired event name" />
          </Grid>
          <Grid xs={2}>
            <TextField label="Event Start Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid xs={10}>
            <TextField label="Event End Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid xs={12}>
            <AccountFields label="Event Location" placeholder="Event Address" />
          </Grid>
          <Grid xs={2}>
            <TextField label="Student Registration Start Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid xs={10}>
            <TextField label="Student Registration End Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid xs={2}>
            <TextField label="Teacher Registration Start Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid xs={10}>
            <TextField label="Teacher Registration End Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>

          <Grid xs={12}>
            <FormHelperText>*Save your preferences below for them to take effect</FormHelperText>
          </Grid>
            <Button variant="contained" className={classes.button} color="primary">
            <ListItemIcon>
              <Icon>save</Icon>
            </ListItemIcon>
                Save Changes
            </Button>
            <Button variant="contained" className={classes.button} color="primary" disabled>
            <ListItemIcon>
              <Icon>cancel</Icon>
            </ListItemIcon>
                Discard Changes
            </Button>
        </Grid>
        {/* </TabContainer> */}
      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(CreateEvent);
