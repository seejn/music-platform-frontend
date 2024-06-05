import axios from 'axios';
import axiosInstance from './accessTokenAxios';
import router from '../router.js'

export const createUser = async (data) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/roles/create/`;
  try {
    const response = await axios.post(url, data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const createArtist = async (data) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/roles/create_artist/`;
  try {
    const response = await axios.post(url, data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export const Login = async (data, store) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/roles/login/`;
  try {
    const response = await axios.post(url, data);
    store.dispatch("login", response.data)
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const Logout = async (store) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/roles/logout/`;
  try {
    const refresh_token = window.localStorage.getItem("refresh_token")
    const response = await axiosInstance.post(url, {
        "refresh_token": refresh_token
    });
    store.dispatch("logout")
    router.push('/')
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
