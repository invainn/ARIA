import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortal/CustomerPortalContainer'; 

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
  subheadingTitle: {
    fontStyle: 'italic',
    paddingTop: '25px',
    width: '100%',
    fontWeight: 'normal',
    textDecorationColor: '#FFFFFF',
    paddingBottom: '15px',
  },
});

const ControlledExpansionPanels = (props) => {
    const { classes } = props;

    return (
    <CustomerPortalContainer>
      <div className={classes.pageTitle}>
        <Typography component="h2" variant="h2" gutterBottom align="center">
            About Us
        </Typography>
      </div>
      <div>
          <div className={classes.subheadingTitle}>
            <Typography component="h6" variant="h6" gutterBottom align="left">
                Our Mission
            </Typography>
          </div>
          <Typography component="body1" variant="body1" gutterBottom align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam malesuada urna justo, vitae rhoncus enim interdum varius.
            Phasellus a interdum dolor, sit amet commodo sapien.
            Donec dapibus ipsum eget diam mattis, at feugiat augue pharetra.
            Vestibulum mollis sodales facilisis. Vestibulum volutpat sapien sit amet
            mi mollis, nec ultricies erat egestas. Nam ut sapien porttitor, venenatis
            mi sed, luctus leo. Nunc tortor massa, aliquam sed porta et, fringilla id
            diam. Sed vel blandit lacus. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Etiam
            ut sapien faucibus, auctor eros eget, venenatis arcu. Mauris fermentum lacus
            arcu, et commodo libero gravida ut. Aenean molestie semper augue nec
            sagittis. Nam imperdiet maximus nunc, quis venenatis orci facilisis ac.
            Vestibulum ipsum nulla, hendrerit nec gravida a, iaculis nec tellus.
            Praesent laoreet ornare orci, eget vehicula enim convallis vitae.
          </Typography>

          <div className={classes.subheadingTitle}>
            <Typography component="h6" variant="h6" gutterBottom align="left">
                History of NNMTA
            </Typography>
          </div>
          <Typography component="body1" variant="body1" gutterBottom align="left">
            Sed in nunc porttitor, pharetra sapien id, lobortis dui. Aliquam lacinia
            egestas tortor at hendrerit. Sed feugiat justo eu nibh imperdiet, in
            interdum est condimentum. Nam vitae ullamcorper justo. Donec vestibulum
            sagittis mattis. Integer tincidunt pretium lacus, finibus facilisis nunc
            gravida vel. Suspendisse non turpis id dolor scelerisque varius.
            Vestibulum ut pretium nunc. Quisque placerat, ante vel fermentum sollicitudin,
            lacus ex vestibulum neque, nec lobortis ligula quam quis tellus. Suspendisse
            lacus elit, faucibus vel interdum vitae, varius sed enim. Ut justo est
            consectetur nec nisl non, mollis hendrerit neque. Phasellus fringilla,
            velit vel facilisis posuere, elit metus blandit lorem, vel
            sollicitudin ipsum neque id erat. Suspendisse a turpis ante.
          </Typography>

          <div className={classes.subheadingTitle}>
            <Typography component="h6" variant="h6" gutterBottom align="left">
                Our Values
            </Typography>
          </div>
          <Typography component="body1" variant="body1" gutterBottom align="left">
            Pellentesque in interdum erat, non interdum diam. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Vivamus mattis semper semper. Sed sagittis ipsum magna, sit amet
            elementum turpis sagittis a. Aenean finibus commodo arcu, ac
            elementum sem placerat vitae. Nam quis dolor nec ipsum tempus
            elementum quis lacinia quam. Maecenas sollicitudin felis consectetur
            lorem vestibulum volutpat. Duis ut risus quis turpis rutrum porttitor
            id eget erat. Ut sit amet leo nisl.Vestibulum convallis, nibh a fringilla efficitur,
            nunc nunc facilisis felis, sed tincidunt augue elit vitae sapien. Nulla euismod maximus
            pulvinar. In blandit, risus vitae venenatis venenatis, quam neque maximus lacus,
            a ornare purus est quis libero. Aenean tempus vulputate dui at hendrerit.
            Phasellus at lacinia diam.
          </Typography>
      </div>
    </CustomerPortalContainer>
    );
};

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
