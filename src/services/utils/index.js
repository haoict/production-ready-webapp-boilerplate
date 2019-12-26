import axios from 'axios';
import envConfig from '../../config/env-config';
import { setupCache } from 'axios-cache-adapter';

let apiUrl;
if (process.browser) {
  // in client side, we don't have dotEnv config, so we have to set apiUrl
  // in window object and get it here
  apiUrl = window.apiUrl;
} else {
  apiUrl = envConfig.app.apiUrl;
}

// Create `axios-cache-adapter` instance
const cache = setupCache({ maxAge: 15 * 60 * 100, exclude: { query: false } });
const noCache = setupCache({ maxAge: 0 });

const createAxiosInstance = (path, disableCache) => {
  return axios.create({
    baseURL: apiUrl + path,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 9000,
    adapter: disableCache ? noCache.adapter : cache.adapter
  });
};

export async function fetchApi(path, pathParam, query = null, disableCache = false) {
  // always disable cache if request doesn't come from client-side
  if (!process.browser) disableCache = true;
  return createAxiosInstance(path, disableCache)
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
