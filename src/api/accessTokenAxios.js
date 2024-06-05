// api/axios.js
import axios from 'axios';

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

// Add interceptor to check for token expiration
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Make a request to refresh the access token
        const refreshToken = window.localStorage.getItem('refreshToken');
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/token/refresh/`, { refresh: refreshToken });
        
        // Update access token
        const newAccessToken = response.data.access;
        localStorage.setItem('accessToken', newAccessToken);
        
        // Retry original request with new access token
        originalRequest.headers['Authorization'] = 'Bearer ' + newAccessToken;
        return axiosInstance(originalRequest);
      } catch (error) {
        // Handle token refresh failure (e.g., logout the user)
        console.error('Token refresh failed:', error);
        // Redirect user to login page or perform other actions
        throw error;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
