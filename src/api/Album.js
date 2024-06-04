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
export const fetchAlbum = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/${album_id}/`
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
export const creteAlbum = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/create/`
    try{
        const response = await axios(url , {
            method: 'post',
        })
        return response.data.data
    }catch(error){
        console.log(error)
        return error
    }




    
}
export const UpdateAlbum = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/update/${album_id}/`
    try{
        const response = await axios(url , {
            method: 'patch',
        })
        return response.data.data
    }catch(error){
        console.log(error)
        return error
    }




    
}
export const DeleteAlbum = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/delete/${album_id}/`
    try{
        const response = await axios(url , {
            method: 'delete',
        })
        return response.data.data
    }catch(error){
        console.log(error)
        return error
    }




    
}
export const UpdateTrack_Album = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/update_tracks_in_album/${album_id}/`
    try{
        const response = await axios(url , {
            method: 'patch',
        })
        return response.data.data
    }catch(error){
        console.log(error)
        return error
    }




    
}
export const DeleteTrack_Album = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/delete_tracks_from_album/${album_id}/`
    try{
        const response = await axios(url , {
            method: 'delete',
        })
        return response.data.data
    }catch(error){
        console.log(error)
        return error
    }


}


export const fetchAllFavouriteAlbum = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/favourite_album/get_all/`
    try{
        const response = await axios(url , {
            method: 'delete',
        })
        return response.data.data
    }catch(error){
        console.log(error)
        return error
    }


}
export const CreateFavouriteAlbum = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/favourite_album/create/`
    try{
        const response = await axios(url , {
            method: 'post',
        })
        return response.data.data
    }catch(error){
        console.log(error)
        return error
    }


}

export const DeleteFavouriteAlbum = async () => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/album/favourite_album/delete/${favourite_album_id}`
    try{
        const response = await axios(url , {
            method: 'delete',
        })
        return response.data.data
    }catch(error){
        console.log(error)
        return error
    }


}


    