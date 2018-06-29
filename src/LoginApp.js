import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigator } from '../src/routes/NavigationRouteSetup';

class LoginApp extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator/>
      </View>
    );
  }
}

export default LoginApp;

