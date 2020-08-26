import axios from 'axios';

const createApi = () => {
  const api = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
    timeout: 5000,
    withCredentials: false
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;
