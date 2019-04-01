import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Grid,
    Step,
    StepLabel,
    Typography,
    Button,
} from '@material-ui/core';

import SelectDocuments from './SelectDocuments';
import SelectFileType from './SelectFileType';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = ({ palette }) => ({
    eventRegistrationField: {
        padding: '10px',
        width: '90%',
    },
    eventGridItem: {
        width: '100%',
    },
    eventDividerPadding: {
        margin: '5px',
    },
    button: {
        marginTop: '20px',
        marginLeft: '5px',
    },
    pageTitle: {
        width: '100%',
        textDecoration: 'underline',
        textDecorationColor: (palette.type === 'light') ? '#000000' : '#FFFFFF',
        paddingBottom: '15px',
    },
    registerStepper: {
        borderRadius: '5px',
        width: '100%',
        maxWidth: '790px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '15px',
        padding: '20px 20px 20px 20px',
    },
});

class GenerateDocuments extends Component {
    state = {
        activeStep: 0,
    };

    walkStep() {
        this.setState(({ activeStep }) => ({ activeStep: activeStep + 1 }));
    }

    walkBackStep() {
        this.setState(({ activeStep }) => ({ activeStep: activeStep - 1 }));
    }

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <CustomerPortalContainer userType={0}>
                <div className={classes.pageTitle}>
                    <Typography component="h2" variant="h2" gutterBottom align="center">
                        Generate Documents
                    </Typography>
                </div>
                <Grid container alignItems="center" justify="center">
                    <Grid item className={classes.eventGridItem}>
                        <Stepper activeStep={activeStep} className={classes.registerStepper}>
                        {[
                            'Select Forms',
                            'Select File Type',
                        ].map(item => (
                                <Step>
                                    <StepLabel>{item}</StepLabel>
                                </Step>
                        ))}
                        </Stepper>
                    </Grid>
                    <Grid item>
                        { activeStep === 0 && <SelectDocuments /> }
                        { activeStep === 1 && <SelectFileType /> }
                        { activeStep > 0 && (
                            // eslint-disable-next-line react/jsx-no-bind
                            <Button variant="contained" className={classes.button} color="primary" onClick={this.walkBackStep.bind(this)}>
                                Go Back
                            </Button>
                        )}
                        {

                        }
                        { /* eslint-disable-next-line react/jsx-no-bind */ }
                        <Button variant="contained" className={classes.button} color="primary" onClick={this.walkStep.bind(this)}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </CustomerPortalContainer>
        );
    }
}

export default withStyles(styles)(GenerateDocuments);
