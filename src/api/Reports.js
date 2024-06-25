import axios from './accessTokenAxios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const reportTrack = async (trackId, userId) => {
    const reason = prompt("Report Description")

    if(!reason) 
        throw new Error("Need to specity reason to report")

    const url = `${API_BASE_URL}/report/track/${trackId}/user/${userId}/`;
    try {
        const response = await axios.post(url, {reason: reason});
        console.log("You reported track", trackId);
        return response.data;
    } catch (error) {
        if(error.response.data.message) throw new Error(error.response.data.message)
        else throw new Error(error);
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

export const fetchReportedTrackDetails = async (trackId) => {
    const url = `${API_BASE_URL}/report/get_reported_track/${trackId}/`;

    try{
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        throw error
    }
}

export const removeReport = async (reportId) => {
    const url = `${API_BASE_URL}/report/remove/${reportId}/`;

    try{
        const response = await axios.delete(url)
        return response.data
    } catch (error) {
        throw error
    }
}

export const unbanTrack = async(track_id) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/report/unban_track/${track_id}/`

    try{
        const response = await axios.delete(url)
        return response.data
    } catch (error) {
        throw error
    }
}
