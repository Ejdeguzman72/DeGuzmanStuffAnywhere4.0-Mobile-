import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = Axios.create({
    baseURL: 'http://ec2-23-20-134-157.compute-1.amazonaws.com:8080/app',
});

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('DeGuzmanStuffAnywhere');
        return token;
    } catch (error) {
        console.error(`Error retrieving token: ${error}`)
        return null;
    }
}

axiosInstance.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})

const getAllMedicalOffices = () => {
    return axiosInstance.get('/medical-offices/all');
}

const getAllMedicalOfficeInfo = (params) => {
    return axiosInstance.get('/medical-offices/all-medical-offices', { params });
}

const getMedicalOfficesByZip = (zip) => {
    return axiosInstance.get(`/medical-offices/offices/search/zip/${zip}`)
}

const getMedicalOfficeById = (medicalOfficeId) => {
    return axiosInstance.get(`/medical-offices/offices/search/id/${medicalOfficeId}`);
}

const getMedicalTrxCount = () => {
    return axiosInstance.get('/medical-transactions/count')
}

const addMedicalOffice = (newData) => {
    return axiosInstance.post("/medical-offices/add", newData);
}

const updateMedicalOfficeInformation = (medicalOfficeId,data) => {
    return axiosInstance.put(`/medical-offices/update/${medicalOfficeId}`,data);
}

const deleteMedicalOffice = (medicalOfficeId) => {
    return axiosInstance.delete(`/medical-offices/delete/${medicalOfficeId}`);
}

const deleteAllMedicalOffices = () => {
    return axiosInstance.delete('/medical-offices/delete-all');
}


export default {
    getAllMedicalOffices,
    addMedicalOffice,
    getAllMedicalOfficeInfo,
    getMedicalOfficesByZip,
    deleteAllMedicalOffices,
    getMedicalOfficeById,
    getMedicalTrxCount,
    updateMedicalOfficeInformation,
    deleteMedicalOffice
}