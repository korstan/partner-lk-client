import config from 'config.js';
import authService from 'services/auth';
import handleResponse from 'helpers/handleResponse';
import handleResponseError from 'helpers/handleResponseError';
import Axios from 'axios';


export default {
  getProfile: () => {
    return Axios.get(`${config.apiUrl}/api/profiles`, {
      headers: { authorization: authService.getCurrentToken() },
    }).then(handleResponse).catch(handleResponseError);
  },
  updateProfile: (newProfile) => {
    return Axios.put(`${config.apiUrl}/api/profiles`, newProfile, {
      headers: { authorization: authService.getCurrentToken() },
    }).then(handleResponse).catch(handleResponseError);
  },
};
