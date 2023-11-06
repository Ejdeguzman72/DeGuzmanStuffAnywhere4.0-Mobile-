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

const getAllInventory = () => {
    return axiosInstance.get('/inventory/all');
}

const getAllInventoryPagination = (params) => {
    return axiosInstance.get('/inventory/all-inventory', { params } );
};

const getAllInventoryByLocation = (location) => {
    return axiosInstance.get(`/inventory/exercises/search/user/${location}`);
}

const getAllInventoryByCondition = (condition) => {
    return axiosInstance.get(`/inventory/exercise/search/type/${condition}`);
}

const addInventoryInformation = (data) => {
    return axiosInstance.post('/inventory/add',data);
}

const updateInventoryInformation = (data) => {
    return axiosInstance.put(`/inventory/update`,data);
}

const deleteInventory = (data) => {
    return axiosInstance.delete(`/inventory/delete`,data);
}

const deleteAllInventory = () => {
    return axiosInstance.delete('/inventory/delete-all');
}

export default {
    getAllInventory,getAllInventoryPagination,getAllInventoryByLocation,getAllInventoryByCondition,
    addInventoryInformation,updateInventoryInformation,deleteInventory,deleteAllInventory
}