import React from 'react';
import Login from './Login';
import WithStore from './WithStore';
import { emailChanged, passwordChanged, loginUser, resetState } from '../actions';

const LoginScreen = () => {
    return (
        <WithStore
            mapStateToProps={(state) => ({
                email: state.email,
                password: state.password,
                loading: state.loading,
                loggedIn: state.loggedIn,
                error: state.error
            })}
            mapDispatchToProps={{
                emailChanged,
                passwordChanged,
                loginUser,
                resetState
            }}
        >
            { (props) =>
                <Login
                    email={props.email}
                    password={props.password}
                    loading={props.loading}
                    loggedIn={props.loggedIn}
                    error={props.error}
                    onEmailChange={props.emailChanged}
                    onPasswordChange={props.passwordChanged}
                    handleLogin={props.loginUser}
                />
            }
        </WithStore>
    );

};

export default LoginScreen;
