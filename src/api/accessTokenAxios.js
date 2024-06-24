// api/axios.js
import axios from 'axios';
import store from '../store/store.js'
import router from '../router';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  config => {
    const accessToken = window.localStorage.getItem('access_token');
    console.log(`Bearer ${accessToken}`)
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    console.error(error)
    if (error.response.status === 403 && !originalRequest._retry) {
      console.error('Token expired, attempting to refresh...');

      try {
        const refreshToken = window.localStorage.getItem('refresh_token');
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/token/refresh/`, { refresh: refreshToken });

        const newAccessToken = response.data.access;
        window.localStorage.setItem('access_token', newAccessToken);

        originalRequest.headers['Authorization'] = 'Bearer ' + newAccessToken;
        
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        console.log('Logging out user...');
        store.dispatch('logout');
        router.push('/');
        throw refreshError;
      }
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;
