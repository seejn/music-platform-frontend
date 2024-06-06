import axios from './accessTokenAxios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchArtistTracks = async (artistId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/get_artist_track/${artistId}/`
    try{
        const response = await axios(url , {
            method: 'get',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}

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
        console.log("From CreateTrack: ", trackData)
        const response = await axios.post(url, trackData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const data = response.data.data
        console.log(data)
        return data;
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
