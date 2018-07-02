import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, resetState } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { navigationRouteKeys } from '../routes/NavigationRouteSetup';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loggedIn){
        this.props.navigation.navigate(navigationRouteKeys.Home);
    }

  }

  handleLogin = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };

  handleSignup = () => {
    this.props.resetState();
    this.props.navigation.navigate(navigationRouteKeys.Signup);
  };

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.handleLogin}>
                Log in
      </Button>
    );
  }

  render() {
    console.log(this.props);

    return (
      <View>
        <Card>
          <CardSection>
            <Input
              placeholder="user@gmail.com"
              label="Email"
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={this.props.password}
              onChangeText={this.onPasswordChange.bind(this)}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>

          <Text style={styles.footerTextStyle}>
                Don’t have an account yet ?
          </Text>
          <TouchableOpacity
            onPress={this.handleSignup}
            style={styles.signUpButtonStyle}
          >
            <Text style={styles.signUpTextStyle}>
                    Create an account
            </Text>
          </TouchableOpacity>

        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  footerTextStyle: {
      alignSelf: 'center',
      color: '#A6A8A9',
      fontSize: 15,
      paddingTop: 10
  },
  signUpButtonStyle: {
      alignSelf: 'center',
      height: 34,
      justifyContent: 'center'
  },
  signUpTextStyle: {
      color: '#0075ca',
      fontSize: 15
  }
};

const mapStateToProps = ({
  email, password, error, loading, loggedIn
}) => ({
  email, password, error, loading, loggedIn
});

const mapDispatchToProps = {
  emailChanged,
  passwordChanged,
  loginUser,
  resetState
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

