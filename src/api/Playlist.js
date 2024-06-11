import axios from './accessTokenAxios'

export const fetchUserPlaylists = async (userId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/get_user_playlists/${userId}`;
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

export const updatePlaylistPrivacy  = async (playlistId, playlistData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/update_privacy_playlist/${playlistId}/`;
    console.log(url)
    try {
      const response = await axios.patch(url, playlistData);
      return response.data;
    } catch (error) {
      console.error(`Error updating playlist with ID ${playlistId}:`, error);
      throw error;
    }
  };
  



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
export const addTrackFromPlaylist = async (playlistId, playlistData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/add_track_to_playlist/${playlistId}/`;
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

export const fetchAllFavouritePlaylists = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/favourite_playlist/get_all/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching favourite playlists:', error);
        throw error;
    }
}



export const createFavouritePlaylist = async (favouritePlaylistData) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/track/favourite_playlist/create/`;
  try {
    const response = await axios.post(url, favouritePlaylistData);
    console.log('Response from createFavouritePlaylist:', response); // Add this line to see what the response object looks like
    return response.data;
  } catch (error) {
    console.error('Error creating playlist:', error);
    throw error; // Throw the error to handle it in the calling function
  }
};

export const fetchUserFavouritePlaylists = async (userId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/user_favourite_playlist/${userId}`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching favourite playlists:', error);
        throw error;
    }
}

export const deleteFavouritePlaylist = async (favouritePlaylistData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/favourite_playlist/delete/${favouritePlaylistData}/`;
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        console.error(`Error deleting playlist with ID ${favouritePlaylistData}:`, error);
        throw error;
    }
}
export const checkFavouritePlaylist = async (userId,playlistId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/check_favourite_playlist/user/${userId}/playlist/${playlistId}/`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error checking playlist with ID :`, error);
        throw error;
    }
}
export const removePlaylistFromFavouritePlaylist = async (userId,playlistId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/remove_playlist_from_favourite_playlist/user/${userId}/playlist/${playlistId}/`;
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        console.error(`Error remove playlist from favourite playlist  :`, error);
        throw error;
    }
}