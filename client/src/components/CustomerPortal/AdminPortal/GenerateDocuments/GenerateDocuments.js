import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import CustomerPortalContainer from '../../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

const styles = theme => ({
  root: {
    flexGrow: 2,
    width: '75%%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
  },
  documentPaper: {
    marginTop: 5,
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: '#FFFFFF',
    paddingBottom: '15px',
  },
  group: {
    margin: `$(theme.spacing.unit)px 0`,
  },
});

class GenerateDocuments extends React.Component {
  state = {
    value
  };

  handleChange = ({ event }) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes, value } = this.props;

    return (
      <CustomerPortalContainer>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              Document Generation Configurations
          </Typography>
        </div>
        <Paper className={classes.root}>
          <Typography variant="h6" align="center">
              Please select which documents to download:
          </Typography>
        </Paper>
        <FormControl component="fieldset" className={classes.documentPaper}>
            <FormLabel component="legend">Documents</FormLabel>
            <RadioGroup
                aria-label="documents"
                name="documents"
                className={classes.group}
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel 
                    value="Adjudication Forms"
                    control={<Radio color="primary" />}
                    label="Adjudication Forms"
                    labelPlacement="start"
                />
                <FormControlLabel 
                    value="Results Sheets"
                    control={<Radio color="primary" />}
                    label="Results Sheets"
                    labelPlacement="start"
                />
            </RadioGroup>
        </FormControl>

      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(GenerateDocuments);
