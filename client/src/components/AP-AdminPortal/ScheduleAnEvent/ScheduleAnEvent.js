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
  test: {
    flexGrow: 2,
  },
  document: {
    marginTop: 5,
    height: '100%',
  },
  margin: {
    marginLeft: 7,
    justifyContent: 'center',
    alignItems: 'center',
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
              Create Schedule
          </Typography>
        </div>
        <Paper className={classes.root}>
          <Typography variant="h6" align="center">
              Timeblock Minutes: <br />
              <Typography>
              NOTE: This should include time for students to perform, for judges to take notes
              after each student performs, for proctors to introduce the judge(s), and for
              any other section-related events to take place. For traditional sections, 70% of
              the time entered will be reserved for performances, e.g. 60 minutes entered
              results in 42 minutes of performance time. The remaining time is alotted for
              judging, transitioning performers, etc. For masterclass sections, 90% will be
              alotted for performances.
              </Typography>
          </Typography>
        </Paper>

        <div className={classes.test}>
          <Paper className={classes.document}>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="flex-start"
            >
              <Grid item xs={2} className={classes.margin}>
                <TextField
                  required
                  label="Timeblock Minutes"
                />
              </Grid>
              <Grid item xs={2} className={classes.margin}>
                <TextField
                  required
                  label="Saturday timeblock #"
                />
              </Grid>
              <Grid item xs={2} className={classes.margin}>
                <TextField
                  required
                  label="Sunday timeblock #"
                />
              </Grid>
              <Grid item xs={2} className={classes.margin}>
                <Typography>
                    Select timeblock starting times:
                </Typography>
              </Grid>
              <Grid item xs={2} className={classes.margin}>
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