import request from "@/util/Request";
export const uploadImage = (file) => {
    let formData = new FormData();
    formData.append('imageFile', file);
    return request.get( '/image/upload',{
        data: formData,
        headers:{
            "Content-Type": 'multipart/form-data'
        }
    })
};