import * as actionTypes from './actionTypes';
import axios from 'axios';
import { URL_TO_SIGNUP, URL_TO_VERIFY_PASSWORD } from '../../assets/helper/helper'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    }
    let url = URL_TO_SIGNUP;
    if (!isSignUp) {
      url = URL_TO_VERIFY_PASSWORD;
    }

    axios.post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId))
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
  };
};