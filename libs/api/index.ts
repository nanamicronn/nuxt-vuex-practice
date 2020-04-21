import { AxiosPromise } from 'axios';
import api from './api-client.ts';

export const ApiTest = (): AxiosPromise<ApiResponse.ApiTest> => {
  return api.get('https://official-joke-api.appspot.com/random_ten');
};

export const ApiTest2 = (): AxiosPromise<ApiResponse.ApiTest> => {
  return api.get('https://official-joke-api.appspot.com/random_ten');
};
