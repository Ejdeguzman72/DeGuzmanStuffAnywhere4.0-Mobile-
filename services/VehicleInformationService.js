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

const getAllVehicleInformation = () => {
    return axiosInstance.get('/vehicles/all');
}

const getAllVehicles = (params) => {
    return axiosInstance.get('/vehicles/all-vehicles', { params });
}

const getVehicleInformationById = (vehicleId) => {
    return axiosInstance.get(`/vehicles/vehicle/id/${vehicleId}`);
}

const addVehicleInformation = (data) => {
    return axiosInstance.post(`/vehicles/add`,data);
}

const updateVehicleInformation = (vehicleId,data) => {
    return axiosInstance.put(`/vehicles/update/${vehicleId}`,data);
}

const deleteAllVehicles = () => {
    return axiosInstance.delete('/vehicles/delete-all-vehicles');
}

const deleteVehicle = (vehicleId) => {
    return axiosInstance.delete(`/vehicles/delete/${vehicleId}`);
}

export default {
    getAllVehicleInformation,
    getAllVehicles,
    deleteAllVehicles,
    addVehicleInformation,
    getVehicleInformationById,
    updateVehicleInformation,
    deleteVehicle
};