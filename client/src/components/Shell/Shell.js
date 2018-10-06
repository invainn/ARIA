import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ShellHeader from './ShellHeader/ShellHeader';
import ShellFooter from './ShellFooter/ShellFooter';

const styles = () => ({
    main: {
        flex: 1,
    },

    layout: {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
    },
});

const Shell = ({ classes, children }) => (
    <div className={classes.layout}>
        <ShellHeader />
            <main className={classes.main}>
                {children}
            </main>
        <ShellFooter />
    </div>
);

Shell.propTypes = {
    classes: PropTypes.objectOf(
        PropTypes.node,
    ),
    children: PropTypes.node,
};

Shell.defaultProps = {
    classes: {
        layout: {},
        main: {},
    },
    children: {},
};

export default withStyles(styles)(Shell);
