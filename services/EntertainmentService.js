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


const getAllEntertainment = () => {
    return axiosInstance.get('/entertainment/all')
}

const getAllEntertainmentTypes = () => {
    return axiosInstance.get('/entertainment-types/all')
}

const getAllEntertainmentByType = (entertainmentTypeId) => {
    return axiosInstance.get(`/entertainment/all/type/${entertainmentTypeId}`);
}

const getEntertainmentById = (entityId) => {
    return axiosInstance.get(`/entertainment/search/${entityId}`)
}

const getEntertainmentByName = (name) => {
    return axiosInstance.get(`/entertainment/search/${name}`)
}

const addEntertainmentInfo = (data) => {
    return axiosInstance.post(`/entertainment/add`, data)
}

const updateEntertainmentInfo = (entityId, data) => {
    return axiosInstance.put(`/entertainment/update/${entityId}`,data)
}

const deleteEntertainment = (entityId) => {
    return axiosInstance.delete(`/delete/${entityId}`);
}

export default {
    getAllEntertainment,getAllEntertainmentByType,getEntertainmentById,getEntertainmentByName,
    addEntertainmentInfo,updateEntertainmentInfo,deleteEntertainment,getAllEntertainmentTypes
}