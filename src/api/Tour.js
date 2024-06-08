import axios from './accessTokenAxios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createTour= async (tourData) => {
    // const url = `${API_BASE_URL}/album/create/`;
    try {

        console.log("Tour data from api",tourData) 

        // const response = await axios.post(url, albumData);
        // return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const updateTour = async (tourId, tourData ) => {
    // const url = `${API_BASE_URL}/album/update/${albumId}/`;
    try {
        console.log('tourupdated from api',tourdata)
        // const response = await axios.put(url, albumData);
        // return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};