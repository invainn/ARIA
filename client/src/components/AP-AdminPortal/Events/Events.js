import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    List,
    ListItem,
    ListItemText,
    Grid,
    Typography,
    Paper,
    Divider,
} from '@material-ui/core';
import classnames from 'classnames';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px 20px 20px 20px',
    },
    pageTitle: {
        width: '100%',
        textDecoration: 'underline',
        textDecorationColor: (theme.palette.type === 'light') ? '#000000' : '#FFFFFF',
        paddingBottom: '15px',
    },
    list: {
        width: '100%',
    },
    text: {
        textAlign: 'center',
    },
});

class Events extends Component {
    state = {
        selectedIndex: '',
    };

    handleListItemClick = (event, index) => {
        this.setState({ selectedIndex: index });
    };

    render() {
        const { classes } = this.props;
        const {
            selectedIndex,
        } = this.state;

        return (
            <CustomerPortalContainer userType={0}>
                <div className={classes.pageTitle}>
                    <Typography component="h2" variant="h2" gutterBottom align="center">
                        Events
                    </Typography>
                </div>
                <div>
                    <Paper className={classes.root}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item xs={12}>
                                <Typography variant="h6" className={classes.text}>
                                    List of Recent Events
                                </Typography>
                                <Grid xs={12} style={{ paddingTop: '20px' }}>
                                    <Divider />
                                </Grid>
                            </Grid>
                            <div className={
                                classnames({
                                    [classes.list]: true,
                                    [classes.text]: true,
                                })}
                            >
                                <List>
                                    <ListItem
                                      button
                                      fullWidth
                                      selected={selectedIndex === 0}
                                      onClick={event => this.handleListItemClick(event, 0)}
                                    >
                                        <ListItemText
                                          primary="Halloween Recital 2019"
                                        />
                                    </ListItem>

                                    {/* Visually divide the two by a divider */}
                                    <Divider />

                                    <ListItem
                                      button
                                      selected={selectedIndex === 1}
                                      onClick={event => this.handleListItemClick(event, 1)}
                                    >
                                        <ListItemText
                                          primary="Christmas Recital 2019"
                                        />
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                    </Paper>
                </div>
            </CustomerPortalContainer>
        );
    }
}

export default withStyles(styles)(Events);
