import React, { Component } from 'react';
import { Button, CardSection } from './common';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';
import { navigationRouteKeys } from '../routes/NavigationRouteSetup';

class Home extends Component {

  handleButtonPress() {
    this.props.signoutUser();
    this.props.navigation.navigate(navigationRouteKeys.Login);
  }

  render() {
    return (
      <CardSection>
        <Button onPress={this.handleButtonPress.bind(this)}>
                    Log Out
        </Button>
      </CardSection>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ error }) => ({ error });

const mapDispatchToProps = {
  signoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
