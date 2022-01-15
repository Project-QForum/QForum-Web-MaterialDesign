import axios from "axios";
import {config} from "@/config";
export const uploadImage = (file) => {
    let formData = new FormData();
    formData.append('imageFile', file);
    return axios.post(config.ApiUrl+"image/upload",formData,{headers:{"Content-Type": 'multipart/form-data'}})
};