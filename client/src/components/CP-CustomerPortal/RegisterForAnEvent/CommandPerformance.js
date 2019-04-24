/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import { lighten } from '@material-ui/core/styles/colorManipulator';
import {
  // Table,
  // TableBody,
  // TableCell,
  // TableRow,
  // Toolbar,
  Typography,
  Paper,
  TextField,
  // Radio,
} from '@material-ui/core/';

const styles = () => ({
  root: {
    width: '100%',
  },
  text: {
    paddingTop: '7px',
    paddingLeft: '10px',
    paddingBottom: '15px',
  },
  forms: {
    paddingTop: '7px',
    paddingLeft: '10px',
    paddingBottom: '15px',
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: '#FFFFFF',
    paddingBottom: '15px',
  },
});

class CommandPerformance extends Component {
  state = {
  };

  render() {
    const { classes } = this.props;

    return (
            <div className={classes.root}>
                <div>
                    <Typography className={classes.text} variant="h6">
                        Please enter the times best suited for your participant to perform in the
                        Command Performance if selected.
                    </Typography>
                    <form className={classes.forms}>
                        <TextField
                          id="datetime-local"
                          label="Friday"
                          type="datetime-local"
                          className={classes.textField}
                          InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                    <form className={classes.forms}>
                        <TextField
                          id="datetime-local"
                          label="Saturday"
                          type="datetime-local"
                          className={classes.textField}
                          InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                    <form className={classes.forms}>
                        <TextField
                          id="datetime-local"
                          label="Sunday"
                          type="datetime-local"
                          className={classes.textField}
                          InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </div>
            </div>
    );
  }
}

export default withStyles(styles)(CommandPerformance);
