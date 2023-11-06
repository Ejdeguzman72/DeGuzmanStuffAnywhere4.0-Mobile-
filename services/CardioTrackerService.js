import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = Axios.create({
    baseURL: 'http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app',
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
const getAllCardioTrackerInfo = () => {
    return axiosInstance.get('/cardio-tracker-app/all');
}

const getAllCardioTypes = () => {
    return axiosInstance.get('/cardio-types/all');
}

const getAllCardioByType = (cardioTypeId) => {
    return axiosInstance.get(`/cardio-tracker-app/all/type/${cardioTypeId}`);
}

const getAllCardioPagination = (params) => {
    return axiosInstance.get('/cardio-tracker-app/all-cardio', { params });
}

const getCardioTrackerById = (cardioId) => {
    return axiosInstance.get(`/cardio-tracker-app/cardio/id/${cardioId}`);
}

const addCardioInfo = (data) => {
    return axiosInstance.post('/cardio-tracker-app/add',data);
}

const updateCardioInformation = (cardioId,data) => {
    return axiosInstance.put(`/cardio-tracker-app/update/${cardioId}`,data);
}

const deleteCardio = (cardioId) => {
    return axiosInstance.delete(`/cardio-tracker-app/delete/${cardioId}`);
}

const deleteAllCardioInfo = () => {
    return axiosInstance.delete('/cardio-tracker-app/delete-all');
}

export default {
    getAllCardioTrackerInfo,
    getAllCardioTypes,
    getAllCardioByType,
    getAllCardioPagination,
    getCardioTrackerById,
    addCardioInfo,
    updateCardioInformation,
    deleteCardio,
    deleteAllCardioInfo
};