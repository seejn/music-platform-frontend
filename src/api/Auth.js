import axios from 'axios';

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
  const url = `${import.meta.env.VITE_API_BASE_URL}/roles/create_artists/`;
  try {
    const response = await axios.post(url, data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const Login = async (data) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/roles/login/`;
  try {
    const response = await axios.post(url, data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};