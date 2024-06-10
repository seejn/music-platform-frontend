export const handleImageUpload = (fields, imageFile) => {
    const formData = new FormData();

    for (const key in fields) {
      formData.append(key, fields[key]);
    }
    
    if (imageFile) {
      formData.append('image', imageFile);
    }

    return formData
}