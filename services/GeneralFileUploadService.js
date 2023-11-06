import React from 'react';
import Axios from 'axios';

class UploadGeneralFileUploadService {
    uploadGeneralFile(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file",file);


        return axiosInstance.post("/general-transaction-documents/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getGeneralFiles() {
        return axiosInstance.get('/general-transaction-documents/files');
    }
}

export default new UploadGeneralFileUploadService();