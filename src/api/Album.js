import axios from './accessTokenAxios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const fetchArtistAlbums = async (artist_id) => {
    const url = `${API_BASE_URL}/album/get_artist_albums/${artist_id}/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const fetchAllAlbums = async () => {
    const url = `${API_BASE_URL}/album/get_all_albums/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchAlbum = async (albumId) => {
    const url = `${API_BASE_URL}/album/${albumId}/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const createAlbum = async (albumData) => {
    const url = `${API_BASE_URL}/album/create/`;
    try {
        const response = await axios.post(url, albumData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateAlbum = async (albumId, albumData) => {
    const url = `${API_BASE_URL}/album/update/${albumId}/`;
    try {
        const response = await axios.put(url, albumData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteAlbum = async (albumId) => {
    const url = `${API_BASE_URL}/album/delete/${albumId}/`;
    try {
        const response = await axios.delete(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateTracksInAlbum = async (albumId, trackData) => {
    const url = `${API_BASE_URL}/album/update_tracks_in_album/${albumId}/`;
    try {
        const response = await axios.put(url, trackData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteTracksFromAlbum = async (albumId, trackIds) => {
    const url = `${API_BASE_URL}/album/delete_tracks_from_album/${albumId}/`;
    try {
        const response = await axios.delete(url, { data: { track_ids: trackIds } });
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchAllUsersFavouriteAlbums = async () => {
    const url = `${API_BASE_URL}/album/favourite_album/get_all/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchUserFavouriteAlbums = async (userId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/user_favourite_album/${userId}`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching favourite albums:', error);
        throw error;
    }
}

export const createFavouriteAlbum = async (favouriteAlbumData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/favourite_album/create/`;
    try {
      const response = await axios.post(url, favouriteAlbumData);
      console.log('Response from createFavouriteAlbum:', response); 
      return response.data;
    } catch (error) {
      console.error('Error creating album:', error);
      throw error;
    }
  };
  export const removeAlbumFromFavouriteAlbum = async (userId,albumId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/remove_album_from_favourite_album/user/${userId}/album/${albumId}/`;
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        console.error(`Error remove album from favourite album :`, error);
        throw error;
    }
}

export const deleteFavouriteAlbum = async (favouriteAlbumId) => {
    const url = `${API_BASE_URL}/album/favourite_album/delete/${favouriteAlbumId}/`;
    try {
        const response = await axios.delete(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const checkFavouriteAlbum = async (userId,albumId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/check_favourite_album/user/${userId}/album/${albumId}/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error checking album with ID :`, error);
        throw error;
    }
}