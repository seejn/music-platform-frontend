import axios from './accessTokenAxios';

export const fetchUser = async (userId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/roles/user/${userId}/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(`Error fetching user with ID ${userId}:`, error);
        throw error;
    }
};

export const fetchCurrentUser = async (userId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/current_user/${userId}/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(`Error fetching current user with ID ${userId}:`, error);
        throw error;
    }
};




export const updateUser = async (userData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/roles/update_user/${userData.id}/`;
    try {
        const response = await axios.put(url, userData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};



export const followUser = async (userId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/users/follow/${userId}/`;
    try {
        const response = await axios.post(url);
        return response.data.message;
    } catch (error) {
        console.error(`Error following user with ID ${userId}:`, error);
        throw error;
    }
};

export const unfollowUser = async (userId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/users/unfollow/${userId}/`;
    try {
        const response = await axios.post(url);
        return response.data.message;
    } catch (error) {
        console.error(`Error unfollowing user with ID ${userId}:`, error);
        throw error;
    }
};

export const fetchFollowedUsers = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/users/all_followed_user/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching followed users:', error);
        throw error;
    }
};

export const isFollowing = async (followed_by, followed_to) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/users/is_following/followed_by/${followed_by}/followed_to/${followed_to}/`
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching followed users:', error);
        throw error;
    }
}