import React from 'react';
import Shell from '../Shell/Shell';
import HomeLanding from './HomeLanding/HomeLanding';
import HomeCompetitions from './HomeCompetitions/HomeCompetitions';

const Home = () => (
    <Shell>
        <HomeLanding />
        <HomeCompetitions />
    </Shell>
);

export default Home;
