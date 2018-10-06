import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    Typography,
    Grid,
    Icon,
    List,
    ListItem,
} from '@material-ui/core';

const styles = ({ palette, breakpoints }) => ({
    competitionList: {
        width: '100%',
        background: palette.secondary.main,
        color: palette.secondary.contrastText,
        maxHeight: '18vh',
        overflow: 'auto',
    },

    landingCompetition: {
        background: palette.primary.main,
        color: palette.secondary.contrastText,
        height: '25vh',
        padding: 20,
    },

    competitionHeader: {
        fontSize: '2em',
        [breakpoints.down('xs')]: {
            fontSize: '1em',
        },
    },
});

const HomeCompetitions = ({ classes }) => (
    <Grid className={classes.landingCompetition} container justify="center" alignItems="center" id="competitions">
        <Grid item xs={8} container justify="center" alignItems="center" direction="column">
            <List className={classes.competitionList}>
                {
                    (() => {
                        const temp = [];

                        for (let i = 1; i < 10; i += 1) {
                            temp.push(
                                <ListItem button key={i}>
                                    <Typography variant="subheading" color="textPrimary">
                                        Competition {i}
                                    </Typography>
                                    <Icon>keyboard_arrow_right</Icon>
                                </ListItem>,
                            );
                        }

                        return temp;
                    })()
                }
            </List>
        </Grid>
        <Grid item xs={4} container justify="center" alignItems="center">
            <Icon>keyboard_arrow_left</Icon>
            <Typography variant="display1" align="center" color="textPrimary" className={classes.competitionHeader}>
                Competitions
            </Typography>
        </Grid>
    </Grid>
);

HomeCompetitions.propTypes = {
    classes: PropTypes.objectOf(
        PropTypes.node,
    ),
};

HomeCompetitions.defaultProps = {
    classes: {},
};

export default withStyles(styles)(HomeCompetitions);
