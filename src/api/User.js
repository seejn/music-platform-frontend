import axios from './accessTokenAxios'


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


export const updateUser = async (userData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/roles/update_user/${userData.id}/`;

    console.log("from updated user: ", url)
    console.log("from updated user: ", userData)

    // return
    try {
        const response = await axios.put(url, userData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};