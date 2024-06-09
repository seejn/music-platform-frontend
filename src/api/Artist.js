import axios from './accessTokenAxios'

export const fetchAllArtists = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/roles/artists/`
    try{
        const response = await axios(url , {
            method: 'get',
        })
        return response.data.data
    }catch(error){
        console.log(error)
        throw error
    }
}


export const fetchArtist = async (artistId) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/roles/artist/${artistId}/`;
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(`Error fetching artist with ID ${artistId}:`, error);
        throw error;
    }
};
export const updateArtist = async (artistData) => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/roles/artist_personal_info/${artistData.get('id')}/`;
    console.log("from updated artist: ", url)
    console.log("from updated artist: ", artistData)

    // return
    try {
        const response = await axios.put(url, artistData,
            {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
