import axios from './accessTokenAxios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const reportTrack = async (trackId) => {
    const url = `${API_BASE_URL}/report/report_track/${trackId}/`;
    try {
        const response = await axios.get(url);
        console.log("You reported track", trackId);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getAllReportedTracks = async () => {
    const url = `${API_BASE_URL}/report/get_all_reported_tracks/`;
    try {
        const response = await axios.get(url);
        console.log(response)
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getReportedTracksOfArtist = async (artistId) => {
    const url = `${API_BASE_URL}/report/get_reported_tracks_of_artist/${artistId}/`;
    try {
        const response = await axios.get(url);
        return response.data.data; // Ensure that this returns the expected data format
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const getAllBannedTracks = async () => {
    const url = `${API_BASE_URL}/report/get_all_banned_tracks/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getBannedTracksOfArtist = async (artistId) => {
    const url = `${API_BASE_URL}/report/get_banned_tracks_of_artist/${artistId}/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getUnBannedTracksOfArtist = async (trackId) => {
    const url = `${API_BASE_URL}/report/unban_track/${trackId}/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
