import React, { Component } from 'react';
import Home from './Home';
import Spinner from './common/Spinner';
import { Navigator } from '../routes/NavigationRouteSetup';

class Router extends Component {
    render() {
        const {
            loggedIn
        } = this.props;

        switch (loggedIn) {
            case true:
                return <Home/>;
            case false:
                return <Navigator/>;
            default:
                <Spinner size="large"/>
        }
    }
}

export default Router;
