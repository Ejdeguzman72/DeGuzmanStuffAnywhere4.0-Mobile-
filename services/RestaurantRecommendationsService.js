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

const GetAllRestaurantRecommendations = () => {
    return axiosInstance.get('/restaurants/all')
}

const getAllRestaurants = (params) => {
    return axiosInstance.get('/restaurants/all-restaurants', { params });
}

const getRestaurantsByType = (data) => {
    return axiosInstance.get(`/restaurants/all/search/type`,data)
}

const getRestaurantsByZip = (data) => {
     return axiosInstance.get(`/restaurants/all/search/zip`)
}

const getRestaurantsByDescr = (data) => {
    return axiosInstance.get(`/restaurants/all/search/descr`,data)
}

const getRestaurantById = (restaurantId) => {
    return axiosInstance.get(`/restaurants/restaurant/search/id/${restaurantId}`);
}

const getRestaurantsDTOById = (restaurantId) => {
    return axiosInstance.get(`/restaurants/restaurant-dto/search/id/${restaurantId}`)
}

const getRestaurantByName = (data) => {
    return axiosInstance.get(`/restaurants/restaurant/search/name`,data)
}

const getRestaurantCount = () => {
    return axiosInstance.get(`/restaurants/count`)
}

const addRestaurantInformation = (data) => {
    return axiosInstance.post('/restaurants/add',data);
}

const updateRestaurantInformation = (restaurantId,data) => {
    return axiosInstance.put(`/restaurants/update/${restaurantId}`,data);
}

const deleteRestaurantInformation = (restaurantId) => {
    return axiosInstance.delete(`/restaurants/delete/${restaurantId}`);
}

const deleteAllRestaurants = () => {
    return axiosInstance.delete('/restaurants/delete-all');
}

const getAllRestaurantTypes = () => {
    return axiosInstance.get('/restaurant-types/all')
}

export default {
    GetAllRestaurantRecommendations,
    getAllRestaurants,
    deleteAllRestaurants,
    getRestaurantById,
    addRestaurantInformation,
    updateRestaurantInformation,
    deleteRestaurantInformation,
    getRestaurantsByType,
    getRestaurantCount,
    getRestaurantByName,
    getRestaurantsDTOById,
    getRestaurantsByDescr,
    getRestaurantsByZip,
    getAllRestaurantTypes
}