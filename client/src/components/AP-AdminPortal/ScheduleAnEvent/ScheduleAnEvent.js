/**
 *  TODO: This page is entirely todo, to the understanding of the stakeholder needs
 */


/* eslint eqeqeq:0 */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  TextField,
  Grid,
  Paper,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  Input,
  Divider,
} from '@material-ui/core';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px 20px 20px 20px',
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
    textDecorationColor: (theme.palette.type === 'light') ? '#000000' : '#FFFFFF',
    paddingBottom: '15px',
  },
  test: {
    flexGrow: 2,
  },
  document: {
    marginTop: 5,
    height: '100%',
  },
  forms: {
    display: 'block',
    margin: '15px 15px 15px 0px',
  },
});

// Bad i know
const time = [
    '9:00 a.m.',
    '9:30 a.m.',
    '10:00 a.m.',
    '10:30 a.m.',
    '11:00 a.m.',
    '11:30 a.m.',
    '12:00 p.m.',
    '12:30 p.m.',
    '1:00 p.m.',
    '1:30 p.m.',
    '2:00 p.m.',
    '2:30 p.m.',
    '3:00 p.m.',
    '3:30 p.m.',
    '4:00 p.m.',
    '4:30 p.m.',
    '5:00 p.m.',
    '5:30 p.m.',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

class ScheduleAnEvent extends Component {
  state = {
    times: [],
  };

  handleChange = ({ event }) => { // eslint-disable-line no-use-before-define
    this.setState({ times: event.target.value }); // eslint-disable-line no-use-before-define
  };

  render() {
    const { classes } = this.props;


    return (
      <CustomerPortalContainer userType={0}>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              Schedule An Event
          </Typography>
        </div>

        <div className={classes.test}>
          <Paper className={classes.root}>

          <Typography variant="h6">
          Please enter the allotted time for performances and the amount of time for judging.
          </Typography>

          <Divider />

            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="flex-start"
            >
              <Grid item xs={12} className={classes.forms}>
                <TextField
                  required
                  label="Timeblock Minutes"
                />
              </Grid>
              <Grid item xs={12} className={classes.forms}>
                <TextField
                  required
                  label="Judging Time"
                />
              </Grid>
              <Grid item xs={12} className={classes.forms}>
                <Typography>
                    Select timeblock starting times:
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.forms}>
                <InputLabel htmlFor="select-multiple">Times</InputLabel>
                <Select
                  multiple
                  // eslint-disable-next-line react/destructuring-assignment
                  value={(this.state.times)}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple" />}
                  MenuProps={MenuProps}
                >
                    {time.map(times => (
                        <MenuItem
                          key={times}
                          value={times}
                        >
                        {times}
                        </MenuItem>
                    ))}
                </Select>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(ScheduleAnEvent);
