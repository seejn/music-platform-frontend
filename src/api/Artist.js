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

export const fetchArtist=async(artistId)=>{
    const url = `${import.meta.env.VITE_API_BASE_URL}/roles/artists/${artistId}/`
    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error(`Error fetching artist with ID ${artistId}:`, error);
        throw error;
    }
}