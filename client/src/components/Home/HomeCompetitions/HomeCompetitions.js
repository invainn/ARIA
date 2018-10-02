import React from 'react';
import { withStyles, 
         Typography, 
         Grid, 
         Icon, 
         List, 
         ListItem, 
         Divider 
} from '@material-ui/core';

const styles = (theme) => ({
    competitionList: {
        width: '100%',
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        maxHeight: '18vh',
        overflow: 'auto',
    },

    landingCompetition: {
        background: theme.palette.primary.main,
        color: theme.palette.secondary.contrastText,
        height: '25vh',
        padding: 20 ,
    },

    competitionHeader: {
        fontSize: '2em',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1em',
        },
    },
});

const HomeCompetitions = (props) => (
    <Grid className={props.classes.landingCompetition} container justify="center" alignItems="center">
        <Grid item xs={8} container justify="center" alignItems="center" direction="column">
            <List className={props.classes.competitionList}>
                {
                    (() => {
                        let temp = [];

                        for(let i = 1; i < 10; i++) {
                            temp.push (
                                <ListItem button key={i}>
                                    <Typography variant="subheading" color="textPrimary">
                                        Competition {i} 
                                    </Typography>
                                    <Icon>keyboard_arrow_right</Icon>
                                </ListItem>
                            );

                            temp.push(<Divider />);
                        }

                        return temp;
                    })()
                }
            </List>
        </Grid>
        <Grid item xs={4} container justify="center" alignItems="center">
            <Icon>keyboard_arrow_left</Icon>
            <Typography variant="display1" align="center" color="textPrimary" className={props.classes.competitionHeader}>
                Competitions 
            </Typography>
        </Grid>
    </Grid>
);

export default withStyles(styles)(HomeCompetitions);