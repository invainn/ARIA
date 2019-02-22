import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
InputLabel,
MenuItem,
FormControl,
Select,
Typography,
} from '@material-ui/core';


const styles = theme => ({
  button: {
    display: 'inline-block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ShellHeaderOptions extends Component {
  state = {
    options: '',
    open: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { options, open } = this.state;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel>
            <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                Options
            </Typography>
          </InputLabel>
          <Select
            open={open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={options}
            onChange={this.handleChange}
            inputProps={{
              name: 'options',
              id: 'header-options',
            }}
          >
            <MenuItem
              component={Link}
              to="/customer/dashboard"
            >
                Back to Dashboard
            </MenuItem>
            <MenuItem
              component={Link}
              to="/customer/account"
            >
                My Account
            </MenuItem>
            <MenuItem
              component={Link}
              to="/"
            >
                Sign Out
            </MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(ShellHeaderOptions);
