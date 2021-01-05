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

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expresionDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url = URL_TO_SIGNUP;
    if (!isSignUp) {
      url = URL_TO_VERIFY_PASSWORD;
    };

    axios.post(url, authData)
      .then(response => {
        console.log(response);

        localStorage.setItem('token', response.data.idToken);

        const expiratonDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('expresionDate', expiratonDate);
        localStorage.setItem('userId', response.data.localId)
        dispatch(authSuccess(response.data.idToken, response.data.localId))
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expresionDate = new Date(localStorage.getItem('expresionDate'));
      if (expresionDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeout((expresionDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  }
}