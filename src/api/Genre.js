import axios from 'axios'

export const fetchGenres = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/genre/get_all_genres/`
    try{
        const response = await axios(url, {
            method: 'get',
        })
        console.log(response.data.data)
        return response.data.data
    }catch(error){
        throw error
    }
}