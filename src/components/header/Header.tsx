import Drawer from '@material-ui/core/Drawer/Drawer';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import React, { Component } from 'react';
import CoachIcon from '@material-ui/icons/SupervisedUserCircle';
import FitnessIcon from '@material-ui/icons/FitnessCenter';
import MapIcon from '@material-ui/icons/Map';
import ViewHeadline from '@material-ui/icons/ViewHeadline';
import NavigationService from '../../services/NavigationService';

import './Header.scss';

export default class Header extends Component<any> {
    public state = {
        drawerOpen: false
    };

    public render() {
        return (
            <div className="combinedHeader">
                <Drawer anchor="right"
                        open={this.state.drawerOpen}
                        onClose={() => {this.toggleMenu()}}
                        key="drawer"
                >
                    <div tabIndex={0}
                         role="button"
                         onClick={() => {this.toggleMenu()}}
                         onKeyDown={() => {this.toggleMenu()}}>
                        <div className="menuBody">
                            <List>
                                <ListItem button key="membership" onClick={() => {}}>
                                    <FitnessIcon />
                                    <ListItemText primary="&nbsp;&nbsp;Join Us"/>
                                </ListItem>
                                <ListItem button key="find" onClick={() => NavigationService.openGymMap()}>
                                    <MapIcon />
                                    <ListItemText primary="&nbsp;&nbsp;Find Us"/>
                                </ListItem>
                                <ListItem button key="coaches" onClick={() => {}}>
                                    <CoachIcon />
                                    <ListItemText primary="&nbsp;&nbsp;Our Coaches"/>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </Drawer>
                <div className="tpgHeader">
                    <span className="tpgLogo" />
                    <ViewHeadline className="mainMenu" onClick={this.toggleMenu.bind(this)} />
                </div>
            </div>
        );
    }

    private toggleMenu(): void {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }
}
