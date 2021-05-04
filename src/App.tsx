import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'typeface-roboto';

import './App.scss';

import Coaching from './components/coaching/Coaching';
import Home from './components/home/Home';
import Join from './components/join/Join';

export default class App extends Component<any> {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/join" component={Join}/>
                    <Route path="/coaching" component={Coaching}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
