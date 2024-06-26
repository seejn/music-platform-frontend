import axios from './accessTokenAxios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchArtistAlbumFavouriteStates = async (artistId) => {
    const url = `${API_BASE_URL}/stats/artist/${artistId}/album/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const fetchAllArtistsSongPlaylistCounts = async () => {
    const url = `${API_BASE_URL}/stats/artists/songs/playlist-counts/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchAllArtistsAlbumFavorites = async () => {
    const url = `${API_BASE_URL}/stats/artists/albums/favorites/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchArtistAlbumCounts = async () => {
    const url = `${API_BASE_URL}/stats/artists/albums/counts/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchTotalArtists = async () => {
    const url = `${API_BASE_URL}/stats/artists/total/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchTotalUsers = async () => {
    const url = `${API_BASE_URL}/stats/users/total/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const fetchTotalTracks = async () => {
    const url = `${API_BASE_URL}/stats/tracks/total/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const fetchArtistTotalTracks = async (artistId) => {
    const url = `${API_BASE_URL}/stats/artist/${artistId}/track-count/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchArtistTotalAlbums = async (artistId) => {
    const url = `${API_BASE_URL}/stats/artist/${artistId}/album-count/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}
