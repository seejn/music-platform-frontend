import axios from 'axios'

export const fetchAllAlbums = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/get_all_albums/`
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