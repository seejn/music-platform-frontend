import axios from './accessTokenAxios'

export const fetchUserPlaylists = async (userId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/get_all_playlist/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching playlists:', error);
        throw error;
    }
}

export const fetchAllPlaylists = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/get_all_playlist/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching playlists:', error);
        throw error;
    }
}

export const fetchPlaylist = async (playlistId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/playlist/${playlistId}/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(`Error fetching playlist with ID ${playlistId}:`, error);
        throw error;
    }
}

export const createPlaylist = async (playlistData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/create_playlist/`;
    try {
        const response = await axios.post(url, playlistData);
        return response.data;
    } catch (error) {
        console.error('Error creating playlist:', error);
        throw error;
    }
}

export const updatePlaylist = async (playlistId, playlistData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/update_playlist/${playlistId}/`;
    try {
    console.log("playlistData", playlistData);
        const response = await axios.patch(url, playlistData);
        return response.data;
    } catch (error) {
        console.error(`Error updating playlist with ID ${playlistId}:`, error);
        throw error;
    }
}


export const addRemoveTrackFromPlaylist = async (playlistId, playlistData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/add_remove_track_to_playlist/${playlistId}/`;
    try {
    console.log("playlistData", playlistData);
        const response = await axios.patch(url, playlistData);
        return response.data;
    } catch (error) {
        console.error(`Error updating playlist with ID ${playlistId}:`, error);
        throw error;
    }
}

export const deletePlaylist = async (playlistId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/delete_playlist/${playlistId}/`;
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        console.error(`Error deleting playlist with ID ${playlistId}:`, error);
        throw error;
    }
}
