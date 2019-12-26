import axios from 'axios';
import envConfig from '../../config/env-config';

const createAxiosInstance = path => {
  let apiUrl;
  if (process.browser) {
    apiUrl = window.apiUrl;
  } else {
    apiUrl = envConfig.app.apiUrl;
  }

  return axios.create({
    baseURL: apiUrl + path,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'api-access-token': 'some-random-string'
    },
    timeout: 9000
  });
};

export async function fetchApi(path, pathParam, query = null) {
  return createAxiosInstance(path)
    .get(pathParam, { params: query })
    .then(response => {
      if (response.data) {
        return response.data;
      }
      return response;
    })
    .catch(error => {
      return error;
    });
}
