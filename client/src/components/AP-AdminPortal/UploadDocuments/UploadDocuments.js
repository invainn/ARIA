import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Paper,
  Grid,
  Typography,
  // ListItemIcon,
  Icon,
  Divider,
} from '@material-ui/core';

import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: '800px',
    maxHeight: '250px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px 20px 20px 20px',
  },
  div: {
    paddingBottom: '20px',
  },
  icon: {
    display: 'inline-block',
    marginRight: '7px',
  },
  button: {
    margin: theme.spacing.unit,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: (theme.palette.type === 'light') ? '#000000' : '#FFFFFF',
    paddingBottom: '15px',
  },
  document: {
    marginTop: 5,
  },
});

class UploadDocuments extends Component {
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
              Upload Documents
          </Typography>
        </div>

        <Paper className={classes.root}>
          <div className={classes.div}>
            <Typography variant="h6" align="center">
                Please select the file you would like to add into the NNMTA database. <br />
                Name the file by document type followed by the event and year. <br />
                e.g: AdjudicationHalloween2019.docx
            </Typography>

            <Grid xs={12} style={{ paddingTop: '20px' }}>
              <Divider />
            </Grid>
          </div>

          <Grid container align="center">
            <Grid item xs={12}>
              <Button variant="contained" color="default" className={classes.button}>
                  <Icon className={classes.icon}>cloud_upload</Icon>
                  Upload
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="default" className={classes.button}>
                  <Icon className={classes.icon}>cloud_download</Icon>
                  Download
              </Button>
            </Grid>
          </Grid>

        </Paper>

      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(UploadDocuments);
