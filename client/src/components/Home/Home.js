import React, { Component } from 'react';
import HomeLanding from './HomeLanding/HomeLanding';
import HomeCompetitions from './HomeCompetitions/HomeCompetitions';
import Shell from '../Shell/Shell';
import { withStyles, 
       } from '@material-ui/core';

const styles = () => ({
    image: {
        maxWidth: '100%',
    },
});

class Home extends Component {
    render() {
        return (
            <Shell>
                <HomeLanding />
                <HomeCompetitions />
            </Shell> 
        );
    }
}

export default withStyles(styles)(Home);