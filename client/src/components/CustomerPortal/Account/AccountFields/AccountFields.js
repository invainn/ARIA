import React from 'react';
import {
withStyles,
TextField,
} from '@material-ui/core';

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

export default withStyles(styles)(FilledTextFields);
