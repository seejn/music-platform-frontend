
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


axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
     
        const refreshToken = window.localStorage.getItem('refreshToken');
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/token/refresh/`, { refresh: refreshToken });
        

        const newAccessToken = response.data.access;
        localStorage.setItem('accessToken', newAccessToken);
        

        originalRequest.headers['Authorization'] = 'Bearer ' + newAccessToken;
        return axiosInstance(originalRequest);
      } catch (error) {
       
        console.error('Token refresh failed:', error);
       
        throw error;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
