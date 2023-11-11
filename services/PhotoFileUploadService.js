import React from 'react';
import Axios from 'axios';

const uploadPhotosService = (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file",file);

    return axiosInstance.post("/photo-uploads/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        onUploadProgress
    });
};

const getPhotoFiles = () => {
    return Axios.get("http://ec2-23-20-134-157.compute-1.amazonaws.com:8080/app/photo-uploads/files");
}

export default {
    uploadPhotosService,
    getPhotoFiles
};