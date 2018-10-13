import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import {
    Toolbar,
    Drawer,
    IconButton,
    Icon,
    List,
    ListItem,
    Divider,
    Typography,
} from '@material-ui/core';

import logo from '../logo-header.png';

const styles = ({ palette }) => ({
    shellLogo: {
        maxWidth: 85,
        margin: 10,
    },

    logoContainer: {
        flex: 1,
    },

    mobileNavTitle: {
        padding: '5px 80px 20px 5px',
    },

    selected: {
        backgroundImage: `linear-gradient(${palette.primary.dark}, #FFF)`,
        backgroundSize: '100% 2px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%',
    },
});

class ShellHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileDrawer: false,
        };
    }

    toggleMobile = toggle => () => {
        this.setState({
            mobileDrawer: toggle,
        });
    };

    render() {
        const { classes } = this.props;
        const { mobileDrawer } = this.state;

        return (
            <AppBar color="primary" position="sticky">
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton color="inherit" onClick={this.toggleMobile(true)} smDown>
                            <Icon>menu</Icon>
                        </IconButton>
                        <Drawer variant="temporary" anchor="left" open={mobileDrawer} onClose={this.toggleMobile(false)} ModalProps={{ disableRestoreFocus: true }}>
                            <div role="button" onClick={this.toggleMobile(false)} onKeyDown={this.toggleMobile(false)}>
                                <List>
                                    <ListItem>
                                        <Typography variant="title" color="textPrimary" className={classes.mobileNavTitle}>
                                            NNMTA
                                        </Typography>
                                    </ListItem>
                                    <Divider />
                                </List>
                            </div>
                        </Drawer>
                    </Hidden>
                    <div className={classes.logoContainer}>
                        <img variant="title" className={classes.shellLogo} src={logo} alt="NNMTA" />
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

ShellHeader.propTypes = {
    classes: PropTypes.objectOf(
        PropTypes.node,
    ),
};

ShellHeader.defaultProps = {
    classes: {},
};

export default withStyles(styles)(ShellHeader);
