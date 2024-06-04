import axios from 'axios'

export const fetchAllPlaylists = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/get_all_playlist/`
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


export const fetchPlaylist = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/track/playlist/$/`
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