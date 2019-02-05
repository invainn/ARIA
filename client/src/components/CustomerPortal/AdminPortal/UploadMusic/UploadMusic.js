import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Paper,
  Typography,
  ListItemIcon,
  Icon,
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import CustomerPortalContainer from '../../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

const styles = theme => ({
  root: {
    flexGrow: 2,
    width: '75%%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
  },
  button: {
    margin: theme.spacing.unit,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '43%',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: '#FFFFFF',
    paddingBottom: '15px',
  },
  document: {
    marginLeft: 7,
    marginTop: 5,
  },
});

class UploadMusic extends React.Component {
  state = {
  };

  handleChange = () => {
    this.setState({});
  };

  render() {
    const { classes } = this.props;

    return (
      <CustomerPortalContainer userType={0}>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              Upload Music
          </Typography>
        </div>
        <Paper className={classes.root}>
          <Typography variant="h6" align="center">
              Please upload a CSV file containing the music you wish to upload.
          </Typography>
        </Paper>

        <Paper className={classes.document}>
          <div>
              <Typography variant="h5" align="center">
                  CSV Music File*
              </Typography>
              <Typography variant="body6" align="center">
                  The CSV file should be in the following format: <br />
                  Level(1-11), Period(1-4), Composer, Title, Opus/Catalog Number
              </Typography>
          </div>

          <div className={classes.button}>
              <Button variant="contained" color="default">
                  Upload
                  <CloudUploadIcon className={classes.rightIcon} />
              </Button>
          </div>

          <div>
              <Button variant="contained" className={classes.button} color="primary">
                  <ListItemIcon>
                  <Icon>save</Icon>
                  </ListItemIcon>
                      Save Changes
              </Button>
          </div>
        </Paper>

      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(UploadMusic);
