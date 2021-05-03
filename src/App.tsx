import React, { Component } from 'react';
import 'typeface-roboto';

import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';

export default class App extends Component<any> {
    public render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/join">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
