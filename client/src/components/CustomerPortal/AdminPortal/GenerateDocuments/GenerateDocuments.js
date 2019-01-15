import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  ListItemIcon,
  Icon,
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
    value: 'Adjudication Forms'
  };

  handleChange = ({ event }) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

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
        <div>
            <FormControl component="fieldset" className={classes.documentPaper}>
                <FormLabel component="legend">Documents</FormLabel>
                <Button size="small">
                Select All
                </Button>
                <RadioGroup
                    aria-label="documents"
                    name="documents"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
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
                    <FormControlLabel 
                        value="Announcing Sheets"
                        control={<Radio color="primary" />}
                        label="Announcing Sheets"
                        labelPlacement="start"
                    />
                    <FormControlLabel 
                        value="Teacher Master"
                        control={<Radio color="primary" />}
                        label="Teacher Master"
                        labelPlacement="start"
                    />
                    <FormControlLabel 
                        value="Session Assignments"
                        control={<Radio color="primary" />}
                        label="Session Assignments"
                        labelPlacement="start"
                    />
                    <FormControlLabel 
                        value="Room Schedules"
                        control={<Radio color="primary" />}
                        label="Room Schedules"
                        labelPlacement="start"
                    />
                    <FormControlLabel 
                        value="Master Schedule"
                        control={<Radio color="primary" />}
                        label="Master Schedule"
                        labelPlacement="start"
                    />
                    <FormControlLabel 
                        value="Simplified Schedule"
                        control={<Radio color="primary" />}
                        label="Simplified Schedule"
                        labelPlacement="start"
                    />
                    <FormControlLabel 
                        value="Teacher List"
                        control={<Radio color="primary" />}
                        label="Teacher List"
                        labelPlacement="start"
                    />
                    <FormControlLabel 
                        value="Theory Scores"
                        control={<Radio color="primary" />}
                        label="Theory Scores"
                        labelPlacement="start"
                    />
                    <FormControlLabel 
                        value="Session Files"
                        control={<Radio color="primary" />}
                        label="Session Files"
                        labelPlacement="start"
                    />
                </RadioGroup>
            </FormControl>
        </div>
        <div>
            <Button variant="contained" className={classes.button} color="primary">
                <ListItemIcon>
                    <Icon>save</Icon>
                </ListItemIcon>
                    Save Changes
            </Button>
        </div>
      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(GenerateDocuments);
