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
    ListItemIcon,
    Divider,
    Button,
    Typography,
} from '@material-ui/core';

import logo from '../logo-header.png';

const styles = () => ({
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
                        <Drawer anchor="left" open={mobileDrawer} onClose={this.toggleMobile(false)}>
                            <div role="button" onClick={this.toggleMobile(false)} onKeyDown={this.toggleMobile(false)}>
                                <List>
                                    <ListItem>
                                        <Typography variant="title" color="textPrimary" className={classes.mobileNavTitle}>
                                            NNMTA
                                        </Typography>
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Icon>home</Icon>
                                        </ListItemIcon>
                                        <Typography variant="body1" color="textPrimary">
                                            Home
                                        </Typography>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Icon>domain</Icon>
                                        </ListItemIcon>
                                        <Typography variant="body1" color="textPrimary">
                                            About
                                        </Typography>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Icon>group</Icon>
                                        </ListItemIcon>
                                        <Typography variant="body1" color="textPrimary">
                                            Competitions
                                        </Typography>
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Icon>favorite</Icon>
                                        </ListItemIcon>
                                        <Typography variant="body1" color="textPrimary">
                                            Donate
                                        </Typography>
                                    </ListItem>
                                </List>
                            </div>
                        </Drawer>
                    </Hidden>
                    <div className={classes.logoContainer}>
                        <img variant="title" className={classes.shellLogo} src={logo} alt="NNMTA" />
                    </div>
                    <Hidden smDown>
                        <Button>
                            <Typography variant="body2" color="textPrimary">
                                Home
                            </Typography>
                        </Button>
                        <Button>
                            <Typography variant="body2" color="textPrimary">
                                About
                            </Typography>
                        </Button>
                        <Button>
                            <Typography variant="body2" color="textPrimary">
                                Competitions
                            </Typography>
                        </Button>
                        <Button>
                            <Typography variant="body2" color="textPrimary">
                                Donate
                            </Typography>
                        </Button>
                    </Hidden>
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
