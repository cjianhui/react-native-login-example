import firebase from 'firebase';
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAIL,
    SIGNOUT_USER,
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from './ActionTypes';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                loginUserFail(dispatch);
            });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user,
        loggedIn: true
    });
};


export const signupUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => signupUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                signupUserFail(dispatch);
            });
    };
};

const signupUserFail = (dispatch) => {
    dispatch({ type: SIGNUP_USER_FAIL });
};

const signupUserSuccess = (dispatch, user) => {
    dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: user,
        loggedIn: true
    });
};

export const signoutUser = () => {
    return (dispatch) => {
        dispatch(
            {
                type: SIGNOUT_USER,
                loggedIn: false
            });
        firebase.auth().signOut();
    };
};
