import axios from './accessTokenAxios'

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
export const fetchTracks = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/${track_id}/`
    try{
        const response = await axios(url , {
            method: 'get',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}
export const createTrack = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/create/`
    try{
        const response = await axios(url , {
            method: 'post',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}
export const updateTracks = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/update/${track_id}/`
    try{
        const response = await axios(url , {
            method: 'patch',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}
export const deleteTracks = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/update/${track_id}/`
    try{
        const response = await axios(url , {
            method: 'delete',
        })
        return response.data.data
    }catch(error){
        throw error
    }
}





