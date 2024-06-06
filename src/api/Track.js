import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch all tracks
export const fetchAllTracks = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/get_all_tracks/`
    try{
        const response = await axios(url , {
            method: 'get',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}
export const fetchTracks = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/${track_id}/`
    try{
        const response = await axios(url , {
            method: 'get',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}

// Create a new track
export const createTrack = async (trackData) => {
    const url = `${API_BASE_URL}/track/create/`;
    try {
        const response = await axios.post(url, trackData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

// Update a track by ID
export const updateTrack = async (trackId, trackData) => {
    const url = `${API_BASE_URL}/track/update/${trackId}/`;
    try {
        const response = await axios.put(url, trackData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

// Delete a track by ID
export const deleteTrack = async (trackId) => {
    const url = `${API_BASE_URL}/track/delete/${trackId}/`;
    try {
        const response = await axios.delete(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};
