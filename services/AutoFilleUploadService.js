import React from 'react';
import Axios from 'axios';

class UploadAutoFilesService {
    uploadAutoFiles(file,onUploadProgress) {
        let formData = new FormData();

        formData.append("file",file);

        return axiosInstance.post("/auto-transaction-documents/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    };

    getAutoFiles() {
        return axiosInstance.get('/auto-transaction-documents/files');
    }
}

export default new UploadAutoFilesService();