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
import SelectFile from './SelectFile';
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
            <CustomerPortalContainer>
                <div className={classes.pageTitle}>
                    <Typography component="h2" variant="h2" gutterBottom align="center">
                        Create an Event
                    </Typography>
                </div>
                <Grid container alignItems="center" justify="center">
                    <Grid item className={classes.eventGridItem}>
                        <Stepper activeStep={activeStep} className={classes.registerStepper}>
                        {[
                            'Select Forms',
                            'Select File Type',
                            'Generate Documents',
                        ].map(item => (
                                <Step>
                                    <StepLabel>{item}</StepLabel>
                                </Step>
                        ))}
                        </Stepper>
                    </Grid>
                    <Grid item>
                        { activeStep === 0 && <SelectDocuments /> }
                        { activeStep === 1 && <SelectFile /> }
                        {/* { activeStep === 2 && <TeacherInfo /> } */}
                        { activeStep > 0 && (
                            <Button variant="contained" color="primary" onClick={this.walkBackStep}>
                                Go Back
                            </Button>
                        )}
                        {

                        }
                        <Button variant="contained" className={classes.eventRegistrationButton} color="primary" onClick={this.walkStep}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </CustomerPortalContainer>
        );
    }
}

export default withStyles(styles)(GenerateDocuments);
