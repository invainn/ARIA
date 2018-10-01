import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import logo from '../logo-header.png';
import { Toolbar, 
         Drawer, 
         IconButton, 
         Icon, 
         List, 
         ListItem, 
         ListItemIcon, 
         Divider, 
         Button 
} from '@material-ui/core';

const styles = () => ({
    shellLogo: {
        maxWidth: 100,
        margin: 10,
    },

    logoContainer: {
        flex: 1,
    },
});

class ShellHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileDrawer: false
        };
    }

    toggleMobile = (toggle) => () => {
        this.setState({
            mobileDrawer: toggle
        });
    }

    render() {

        const { classes } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton color="inherit" onClick={this.toggleMobile(true)} smDown>
                            <Icon>menu</Icon>
                        </IconButton>
                        <Drawer anchor="top" open={this.state.mobileDrawer} onClose={this.toggleMobile(false)}>
                            <div role="button" onClick={this.toggleMobile(false)}>
                                <List>
                                    <ListItem>
                                        NNMTA
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Icon>home</Icon>
                                        </ListItemIcon>
                                        Home
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Icon>domain</Icon>
                                        </ListItemIcon>
                                        About
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Icon>home</Icon>
                                        </ListItemIcon>
                                        Competitions
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <Icon>favorite</Icon>
                                        </ListItemIcon>
                                        Donate
                                    </ListItem>
                                </List>
                            </div>
                        </Drawer>
                    </Hidden>
                    <div className={classes.logoContainer}>
                        <img variant="title" className={classes.shellLogo} src={logo} alt="NNMTA" />
                    </div>
                    <Hidden smDown>
                        <Button>Home</Button>
                        <Button>About</Button>
                        <Button>Competitions</Button>
                        <Button>Donate</Button>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(ShellHeader);