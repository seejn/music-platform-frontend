import axios from './accessTokenAxios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch all albums
export const fetchAllAlbums = async () => {
    const url = `${API_BASE_URL}/album/get_all_albums/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const fetchAlbum = async (albumId) => {
    const url = `${API_BASE_URL}/album/${albumId}/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const createAlbum = async (albumData) => {
    const url = `${API_BASE_URL}/album/create/`;
    try {
        const response = await axios.post(url, albumData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const updateAlbum = async (albumId, albumData) => {
    const url = `${API_BASE_URL}/album/update/${albumId}/`;
    try {
        const response = await axios.put(url, albumData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const deleteAlbum = async (albumId) => {
    const url = `${API_BASE_URL}/album/delete/${albumId}/`;
    try {
        const response = await axios.delete(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const updateTracksInAlbum = async (albumId, trackData) => {
    const url = `${API_BASE_URL}/album/update_tracks_in_album/${albumId}/`;
    try {
        const response = await axios.put(url, trackData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const deleteTracksFromAlbum = async (albumId, trackIds) => {
    const url = `${API_BASE_URL}/album/delete_tracks_from_album/${albumId}/`;
    try {
        const response = await axios.delete(url, { data: { track_ids: trackIds } });
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const fetchAllUsersFavouriteAlbums = async () => {
    const url = `${API_BASE_URL}/album/favourite_album/get_all/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const createFavouriteAlbum = async (albumId) => {
    const url = `${API_BASE_URL}/album/favourite_album/create/`;
    try {
        const response = await axios.post(url, { album_id: albumId });
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const deleteFavouriteAlbum = async (favouriteAlbumId) => {
    const url = `${API_BASE_URL}/album/favourite_album/delete/${favouriteAlbumId}/`;
    try {
        const response = await axios.delete(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};
