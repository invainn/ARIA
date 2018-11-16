import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

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
                <Checkbox checked={prefTwo} onChange={this.handleChange('prefTwo')} value="Receive certificates by e-mail" color="primary" />
              }
              label="Receive certificates in the mail"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={prefThree}
                  onChange={this.handleChange('prefThree')}
                  value="Receive notifications about upcoming events"
                  color="primary"
                />
              )}
              label="A Third Preference"
            />
            <FormControlLabel
              control={
                (
                <Checkbox
                  checked={prefFour}
                  onChange={this.handleChange('prefFour')}
                  value="Receive reminders about registrations"
                  color="primary"
                />
                )
              }
              label="A Fourth Preference"
            />
          </FormGroup>
          <FormHelperText>*Save your preferences below for them to take effect</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);
