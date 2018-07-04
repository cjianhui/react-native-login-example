import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { navigationRouteKeys } from "../routes/NavigationRouteSetup";

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

class Login extends Component {

    onEmailChange = (text) => {
        this.props.onEmailChange(text);
    };

    onPasswordChange = (text) => {
        this.props.onPasswordChange(text);
    };

    handleSignup = () => {
        this.props.resetState();
        this.props.navigation.navigate(navigationRouteKeys.Signup);
    };

    handleLogin = () => {
        const { email, password } = this.props;
        this.props.handleLogin({ email, password });
    };


    render () {
        console.log(this.props);
        const {
            email,
            password,
            loading,
            loggedIn,
            error
        } = this.props;

        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="user@gmail.com"
                            label="Email"
                            value={email}
                            onChangeText={this.onEmailChange}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder="password"
                            label="Password"
                            value={password}
                            onChangeText={this.onPasswordChange}
                        />
                    </CardSection>

                    <Text style={styles.errorTextStyle}>
                        {error}
                    </Text>

                    <CardSection>
                        {
                            loading ? (
                                <Spinner size="small" />
                            ) : (
                                <Button onPress={
                                    this.handleLogin
                                }
                                >
                                    Log in
                                </Button>
                            )
                        }
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

export default withNavigation(Login);

