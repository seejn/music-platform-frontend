import axios from './accessTokenAxios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchArtistTracks = async (artistId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/get_artist_track/${artistId}/`
    try{
        const response = await axios(url , {
            method: 'get',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}

export const fetchAllTracks = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/get_all_tracks/`
    try{
        const response = await axios(url , {
            method: 'get',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}

export const fetchTracks = async (trackId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/${trackId}/`
    try{
        const response = await axios(url , {
            method: 'get',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}

export const createTrack = async (trackData) => {
    const url = `${API_BASE_URL}/track/create/`;
    try {
        console.log("From CreateTrack: ", trackData)
        const response = await axios.post(url, trackData, {
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

export const updateTrack = async (trackData) => {
    const url = `${API_BASE_URL}/track/update/${trackData.id}/`;

    console.log("from updated track: ", url)
    console.log("from updated track: ", trackData)

    // return
    try {
        const response = await axios.put(url, trackData);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteTrack = async (trackId) => {
    const url = `${API_BASE_URL}/track/delete/${trackId}/`;
    try {
        const response = await axios.delete(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const fetchArtistTrack = async (artistId) => {
    const url = `${API_BASE_URL}/track/get_artist_track/${artistId}/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const reportTrack = async (trackId) => {
    // const url = `${API_BASE_URL}/track/get_artist_track/${artistId}/`;
    try {
        // const response = await axios.post(url);
        console.log("you reported track",trackId)

        // return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
