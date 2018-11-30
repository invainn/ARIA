import React, { Component } from 'react';
import {
  withStyles,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class CheckboxesGroup extends Component {
  state = {
    prefOne: true,
    prefTwo: false,
    prefThree: false,
    prefFour: false,
  };

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    const {
      prefOne,
      prefTwo,
      prefThree,
      prefFour,
      prefFive,
    } = this.state;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Preferences</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={prefOne} onChange={this.handleChange('prefOne')} value="Receive email communication from NNMTA" color="primary" />
              }
              label="Receive email communication from NNMTA"
            />
            <FormControlLabel
              control={
                <Checkbox checked={prefTwo} onChange={this.handleChange('prefTwo')} value="Recieve email when registration for an event has opened" color="primary" />
              }
              label="Recieve email when registration for an event has opened"
            />
            <FormControlLabel
              control={
                <Checkbox checked={prefThree} onChange={this.handleChange('prefThree')} value="Receive certificates by e-mail" color="primary" />
              }
              label="Receive certificates by e-mail"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={prefFour}
                  onChange={this.handleChange('prefFour')}
                  value="Receive notifications about upcoming events"
                  color="primary"
                />
              )}
              label="A Fourth Preference"
            />
            <FormControlLabel
              control={
                (
                <Checkbox
                  checked={prefFive}
                  onChange={this.handleChange('prefFive')}
                  value="Receive reminders about registrations"
                  color="primary"
                />
                )
              }
              label="A Fifth Preference"
            />
          </FormGroup>
          <FormHelperText>*Save your preferences below for them to take effect</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(CheckboxesGroup);
