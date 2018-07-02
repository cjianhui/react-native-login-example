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
    PASSWORD_CHANGED,
    TOGGLE_LOGIN_STATUS,
    RESET_STATE
} from './ActionTypes';


export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text
});


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

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGIN_USER });

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch((error) => {
      console.log(error);
      loginUserFail(dispatch);
    });
};

const signupUserFail = (dispatch) => {
  dispatch({ type: SIGNUP_USER_FAIL });
};

const signupUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUP_USER_SUCCESS,
    payload: user
  });
};

export const signupUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: SIGNUP_USER });

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => signupUserSuccess(dispatch, user))
    .catch((error) => {
      console.log(error);
      signupUserFail(dispatch);
    });
};

export const signoutUser = () => (dispatch) => {
  dispatch({
    type: SIGNOUT_USER
  });
  firebase.auth().signOut();
};

// change loggedIn to true if user's session with firebase has not terminated
export const toggleLoginStatus = (loggedIn) => (dispatch) => {
  dispatch({
    type: TOGGLE_LOGIN_STATUS,
    loggedIn
  });
};

export const resetState = () => (dispatch) => {
  dispatch({
      type: RESET_STATE
  });
}
