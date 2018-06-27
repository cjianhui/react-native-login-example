import React, { Component } from 'react';
import { Text } from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import {emailChanged, signupUser, passwordChanged} from "../actions";
import {connect} from "react-redux";

class SignupForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    handleButtonPress() {
        const { email, password } = this.props;
        this.props.signupUser(email, password);
    };

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small'/>;
        }

        return (
            <Button onPress={this.handleButtonPress.bind(this)}>
                Sign up
            </Button>
        );
    }

    render() {
        return (
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
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
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

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

const mapDispatchToProps = {
    emailChanged,
    passwordChanged,
    signupUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
