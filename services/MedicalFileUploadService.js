import React from 'react';
import Axios from 'axios';

class UploadMedicalFileUploadService {
    uploadMedicalFile(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);

        return axiosInstance.post("/medical-transaction-documents/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getMedicalFiles() {
        return axiosInstance.get('/medical-transaction-documents/files');
    }
}

export default new UploadMedicalFileUploadService();