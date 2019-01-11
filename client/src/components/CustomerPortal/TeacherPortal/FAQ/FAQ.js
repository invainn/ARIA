import React, { Component } from 'react';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import {
  withStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '@material-ui/core';

import CustomerPortalContainer from '../../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

const styles = theme => ({
  panel: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: '#FFFFFF',
    paddingBottom: '15px',
  },
});

class ControlledExpansionPanels extends Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    // TODO: Better indenting
    // TODO: Indent HTML tag children
    return (
      <CustomerPortalContainer>
        <div className={classes.pageTitle}>
          <Typography component="h2" variant="h2" gutterBottom align="center">
              Frequently Asked Questions
          </Typography>
        </div>
        <div className={classes.panel}>
          <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Topic 1
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Setting up your account
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur luctus semper ipsum, ut suscipit metus
                tincidunt at. Fusce arcu nulla, cursus quis vehicula
                eget, convallis id mauris. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Maecenas venenatis, turpis ut commodo consequat, enim est
                auctor neque, a tincidunt lorem nulla ut elit. Aliquam
                ullamcorper ullamcorper velit eget condimentum. Cras
                accumsan pretium mi, et rutrum ante blandit sit amet.
                Aliquam viverra vitae quam a mollis. Ut ac iaculis magna.
                Aliquam scelerisque congue auctor. Etiam sapien ante, elementum
                eget turpis sit amet, sodales faucibus est. Sed ultrices faucibus nisl.
                Vivamus mi ex, cursus ac malesuada a, elementum aliquet risus.
                Aliquam fermentum mattis enim. Aenean vitae felis nec urna tincidunt
                ornare. Maecenas viverra lorem vel ligula aliquet, ut tincidunt ex
                hendrerit. Nam eget tincidunt magna.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Topic 2</Typography>
              <Typography className={classes.secondaryHeading}>
                Registering a student
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur luctus semper ipsum, ut suscipit metus
              tincidunt at. Fusce arcu nulla, cursus quis vehicula
              eget, convallis id mauris. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Maecenas venenatis, turpis ut commodo consequat, enim est
              auctor neque, a tincidunt lorem nulla ut elit. Aliquam
              ullamcorper ullamcorper velit eget condimentum. Cras
              accumsan pretium mi, et rutrum ante blandit sit amet.
              Aliquam viverra vitae quam a mollis. Ut ac iaculis magna.
              Aliquam scelerisque congue auctor. Etiam sapien ante, elementum
              eget turpis sit amet, sodales faucibus est. Sed ultrices faucibus nisl.
              Vivamus mi ex, cursus ac malesuada a, elementum aliquet risus.
              Aliquam fermentum mattis enim. Aenean vitae felis nec urna tincidunt
              ornare. Maecenas viverra lorem vel ligula aliquet, ut tincidunt ex
              hendrerit. Nam eget tincidunt magna.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Topic 3</Typography>
              <Typography className={classes.secondaryHeading}>
                Viewing upcoming events
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur luctus semper ipsum, ut suscipit metus
              tincidunt at. Fusce arcu nulla, cursus quis vehicula
              eget, convallis id mauris. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Maecenas venenatis, turpis ut commodo consequat, enim est
              auctor neque, a tincidunt lorem nulla ut elit. Aliquam
              ullamcorper ullamcorper velit eget condimentum. Cras
              accumsan pretium mi, et rutrum ante blandit sit amet.
              Aliquam viverra vitae quam a mollis. Ut ac iaculis magna.
              Aliquam scelerisque congue auctor. Etiam sapien ante, elementum
              eget turpis sit amet, sodales faucibus est. Sed ultrices faucibus nisl.
              Vivamus mi ex, cursus ac malesuada a, elementum aliquet risus.
              Aliquam fermentum mattis enim. Aenean vitae felis nec urna tincidunt
              ornare. Maecenas viverra lorem vel ligula aliquet, ut tincidunt ex
              hendrerit. Nam eget tincidunt magna.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Topic 4</Typography>
              <Typography className={classes.secondaryHeading}>
                Contacting NNMTA staff
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur luctus semper ipsum, ut suscipit metus
              tincidunt at. Fusce arcu nulla, cursus quis vehicula
              eget, convallis id mauris. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Maecenas venenatis, turpis ut commodo consequat, enim est
              auctor neque, a tincidunt lorem nulla ut elit. Aliquam
              ullamcorper ullamcorper velit eget condimentum. Cras
              accumsan pretium mi, et rutrum ante blandit sit amet.
              Aliquam viverra vitae quam a mollis. Ut ac iaculis magna.
              Aliquam scelerisque congue auctor. Etiam sapien ante, elementum
              eget turpis sit amet, sodales faucibus est. Sed ultrices faucibus nisl.
              Vivamus mi ex, cursus ac malesuada a, elementum aliquet risus.
              Aliquam fermentum mattis enim. Aenean vitae felis nec urna tincidunt
              ornare. Maecenas viverra lorem vel ligula aliquet, ut tincidunt ex
              hendrerit. Nam eget tincidunt magna.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Topic 5</Typography>
              <Typography className={classes.secondaryHeading}>
                Command Performance Invitations
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur luctus semper ipsum, ut suscipit metus
              tincidunt at. Fusce arcu nulla, cursus quis vehicula
              eget, convallis id mauris. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Maecenas venenatis, turpis ut commodo consequat, enim est
              auctor neque, a tincidunt lorem nulla ut elit. Aliquam
              ullamcorper ullamcorper velit eget condimentum. Cras
              accumsan pretium mi, et rutrum ante blandit sit amet.
              Aliquam viverra vitae quam a mollis. Ut ac iaculis magna.
              Aliquam scelerisque congue auctor. Etiam sapien ante, elementum
              eget turpis sit amet, sodales faucibus est. Sed ultrices faucibus nisl.
              Vivamus mi ex, cursus ac malesuada a, elementum aliquet risus.
              Aliquam fermentum mattis enim. Aenean vitae felis nec urna tincidunt
              ornare. Maecenas viverra lorem vel ligula aliquet, ut tincidunt ex
              hendrerit. Nam eget tincidunt magna.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Topic 6</Typography>
              <Typography className={classes.secondaryHeading}>
                Music Level Breakdown
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur luctus semper ipsum, ut suscipit metus
              tincidunt at. Fusce arcu nulla, cursus quis vehicula
              eget, convallis id mauris. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Maecenas venenatis, turpis ut commodo consequat, enim est
              auctor neque, a tincidunt lorem nulla ut elit. Aliquam
              ullamcorper ullamcorper velit eget condimentum. Cras
              accumsan pretium mi, et rutrum ante blandit sit amet.
              Aliquam viverra vitae quam a mollis. Ut ac iaculis magna.
              Aliquam scelerisque congue auctor. Etiam sapien ante, elementum
              eget turpis sit amet, sodales faucibus est. Sed ultrices faucibus nisl.
              Vivamus mi ex, cursus ac malesuada a, elementum aliquet risus.
              Aliquam fermentum mattis enim. Aenean vitae felis nec urna tincidunt
              ornare. Maecenas viverra lorem vel ligula aliquet, ut tincidunt ex
              hendrerit. Nam eget tincidunt magna.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Topic 7</Typography>
              <Typography className={classes.secondaryHeading}>
                Donating to NNMTA
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur luctus semper ipsum, ut suscipit metus
              tincidunt at. Fusce arcu nulla, cursus quis vehicula
              eget, convallis id mauris. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Maecenas venenatis, turpis ut commodo consequat, enim est
              auctor neque, a tincidunt lorem nulla ut elit. Aliquam
              ullamcorper ullamcorper velit eget condimentum. Cras
              accumsan pretium mi, et rutrum ante blandit sit amet.
              Aliquam viverra vitae quam a mollis. Ut ac iaculis magna.
              Aliquam scelerisque congue auctor. Etiam sapien ante, elementum
              eget turpis sit amet, sodales faucibus est. Sed ultrices faucibus nisl.
              Vivamus mi ex, cursus ac malesuada a, elementum aliquet risus.
              Aliquam fermentum mattis enim. Aenean vitae felis nec urna tincidunt
              ornare. Maecenas viverra lorem vel ligula aliquet, ut tincidunt ex
              hendrerit. Nam eget tincidunt magna.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </CustomerPortalContainer>
    );
  }
}

export default withStyles(styles)(ControlledExpansionPanels);
