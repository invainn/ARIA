import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { HashLink } from 'react-router-hash-link';
import { NavLink, Link } from 'react-router-dom';
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
                                    <ListItem component={Link} to="/" button>
                                        <ListItemIcon>
                                            <Icon>home</Icon>
                                        </ListItemIcon>
                                        <Typography variant="body1" color="textPrimary">
                                            Home
                                        </Typography>
                                    </ListItem>
                                    <ListItem component={HashLink} to="/#about" button>
                                        <ListItemIcon>
                                            <Icon>domain</Icon>
                                        </ListItemIcon>
                                        <Typography variant="body1" color="textPrimary">
                                            About
                                        </Typography>
                                    </ListItem>
                                    <ListItem component={HashLink} to="/#competitions" button smooth>
                                        <ListItemIcon>
                                            <Icon>group</Icon>
                                        </ListItemIcon>
                                        <Typography variant="body1" color="textPrimary">
                                            Competitions
                                        </Typography>
                                    </ListItem>
                                    <ListItem component={Link} to="/donate" button>
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
                        <Button component={NavLink} to="/" activeClassName={classes.selected}>
                            <Typography variant="body2" color="textPrimary">
                                Home
                            </Typography>
                        </Button>
                        <Button component={HashLink} to="/#about" activeClassName={classes.selected}>
                            <Typography variant="body2" color="textPrimary">
                                About
                            </Typography>
                        </Button>
                        <Button component={HashLink} to="/#competitions" activeClassName={classes.selected} smooth>
                            <Typography variant="body2" color="textPrimary">
                                Competitions
                            </Typography>
                        </Button>
                        <Button component={NavLink} to="/donate" activeClassName={classes.selected}>
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
