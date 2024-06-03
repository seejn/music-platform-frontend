import axios from 'axios'

export const fetchAllTracks = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/get_all_tracks/`
    try{
        const response = await axios(url , {
            method: 'get',
        })
        return response.data.data
    }catch(error){
        console.log(error)
        return error
    }
}

