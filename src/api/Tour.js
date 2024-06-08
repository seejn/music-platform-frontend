import axios from './accessTokenAxios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchAllTours = async () =>{
    const url = `${import.meta.env.VITE_API_BASE_URL}/tour/get_all_tours/`
    try{
        const response = await axios(url , {
            method: 'get',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}

export const fetchArtistTour = async (artistId) =>{
    const url = `${import.meta.env.VITE_API_BASE_URL}/tour/get_artist_tour/${artistId}/`
    try{
        const response = await axios(url , {
            method: 'get',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}

export const createTour = async (tourData) => {
    const url = `${API_BASE_URL}/tour/create/`;
    try {
        console.log("From CreateTour: ", tourData)
        const response = await axios.post(url, tourData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const data = response.data.data
        console.log(data)
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const updateTour = async (tourData) => {
    const url = `${API_BASE_URL}/tour/update/${tourData.id}/`;

    console.log("from updated tour: ", url)
    console.log("from updated tour: ", tourData)

    try {
        const response = await axios.put(url, tourData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteTour = async (tourId) => {
    const url = `${API_BASE_URL}/tour/delete/${tourId}/`;
    try {
        const response = await axios.delete(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
