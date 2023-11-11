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

const getAllAutoShops = (params) => {
    return axiosInstance.get('/auto-repair-shops/all-shops', { params });
}

const getAllAutoShopsInfo = (page,PAGE_SIZE) => {
    return axiosInstance.get(`/auto-repair-shops/all?page${page}&pageSize=${PAGE_SIZE}`);
}

const getAutoShopsByZip = (zip) => {
    return axiosInstance.get(`/auto-repair-shops/all/search/zip/${zip}`);
}

const getAutoShopById = (autoShopId) => {
    return axiosInstance.get(`/auto-repair-shops/repair-shop/search/id/${autoShopId}`);
}

const searchAutoShopByName = (name) => {
    return axiosInstance.get(`/auto-repair-shops/repair-shop/search/name/${name}`);
}

const getAutoShopCount = () => {
    return axiosInstance.get(`/auto-repair-shops/count`);
}

const addAutoShop = (newData) => {
    return axiosInstance.post("/auto-repair-shops/add", newData);
}

const updateAutoShop = (autoShopId,autoShop) => {
    return axiosInstance.put(`/auto-repair-shops/update/${autoShopId}`,autoShop);
}

const deleteAutoShop = (autoShopId) => {
    return axiosInstance.delete(`/auto-repair-shops/delete/${autoShopId}`);
}

const deleteAllShopInformation = () => {
    return axiosInstance.delete('/auto-repair-shops/delete-all');
}


export default {
    getAllAutoShops,
    addAutoShop,
    deleteAllShopInformation,
    getAllAutoShopsInfo,
    getAutoShopById,
    updateAutoShop,
    deleteAutoShop,
    getAutoShopsByZip,
    searchAutoShopByName,
    getAutoShopCount
}