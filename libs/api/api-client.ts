import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_HOST
});

export function onRequest(fn: Function) {
  apiClient.interceptors.request.use((config) => fn(config) || config);
}

export function onResponseError(fn: Function) {
  apiClient.interceptors.response.use(
    undefined,
    (error) => fn(error) || Promise.reject(error)
  );
}

export default apiClient;
