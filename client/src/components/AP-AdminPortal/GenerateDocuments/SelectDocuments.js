import React, { Component } from 'react';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import { lighten } from '@material-ui/core/styles/colorManipulator';
import {
  Divider,
  Typography,
  Paper,
  Grid,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core/';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: '790px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px 20px 20px 20px',
  },
  forms: {
    display: 'block',
    margin: '15px 15px 15px 0px',
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: '#FFFFFF',
    paddingBottom: '15px',
  },
  spacing: {
      marginBottom: '5px',
  },
});

class SelectDocuments extends Component {
  state = {
    adjudication: true,
    // results: false,
    // announcing: false,
    // teacherMaster: false,
    // sessionAssignments: false,
    // room: false,
    // master: false,
    // simplified: false,
    // teacherList: false,
    // theory: false,
    // sessionFiles: false,
};

handleChange = formType => ({ event }) => {
    this.setState({ [formType]: event.target.checked });
};

  render() {
    const { classes } = this.props;
    const {
    adjudication,
    // results,
    // announcing,
    // teacherMaster,
    // sessionAssignments,
    // room,
    // master,
    // simplified,
    // teacherList,
    // theory,
    // sessionFiles,
  } = this.state;

    return (
            <Paper className={classes.root}>
                <div>
                    <Typography className={classes.text} variant="h6" align="center">
                        Please select the forms you would like to generate.
                    </Typography>
                    <Grid xs={12}>
                      <Divider />
                    </Grid>

                    <Grid
                      container
                      direction="row"
                      justify="space-evenly"
                      alignItems="center"
                    >
                        <FormControl component="fieldset">
                            <FormGroup>
                                <FormControlLabel
                                  control={
                                        <Checkbox checked={adjudication} onChange={this.handleChange} value="adjudication" />
                                    }
                                  label="Adjudication Forms"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </div>
            </Paper>
    );
  }
}

export default withStyles(styles)(SelectDocuments);
