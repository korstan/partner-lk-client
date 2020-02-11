import config from 'config.js';
import Axios from 'axios';
import handleResponse from 'helpers/handleResponse';
import handleResponseError from 'helpers/handleResponseError';

function getCurrentToken() {
  return localStorage.getItem('accessToken');
}

function signUp(credentials) {
  return Axios.post(`${config.apiUrl}/auth/register`, credentials)
    .then(handleResponse)
    .then((data) => {
      localStorage.setItem('accessToken', data.token);
    })
    .catch(handleResponseError);
}

function signIn(email, password) {
  return Axios.post(`${config.apiUrl}/auth/login`, { email, password })
    .then(handleResponse)
    .then((data) => {
      localStorage.setItem('accessToken', data.token);
    })
    .catch(handleResponseError);
}

function signOut() {
  localStorage.removeItem('accessToken');
}

export default {
  signUp,
  signIn,
  signOut,
  getCurrentToken,
};
