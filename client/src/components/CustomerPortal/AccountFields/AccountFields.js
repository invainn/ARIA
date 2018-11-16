import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const FilledTextFields = (props) => {
    const { classes, label, placeholder } = props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="filled-full-width"
          label={label}
          style={{ margin: 8 }}
          placeholder={placeholder}
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
};

FilledTextFields.propTypes = {
  classes: PropTypes.shape.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default withStyles(styles)(FilledTextFields);
