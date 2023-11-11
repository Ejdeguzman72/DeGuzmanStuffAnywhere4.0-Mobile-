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

const getAllAutoTransactions = () => {
    console.log(authHeader());
    return axiosInstance.get('/auto-transactions/all');
}

const getAllAutoTransactionsPagination = (params) => {
    return axiosInstance.get('/auto-transactions/all-transactions');
}

const getAutoTrxByVehicle = (data) => {
    return axiosInstance.get(`/auto-transactions/transactions/search/vehicle`,data);
}

const getAutoTrxByUser = (data) => {
    return axiosInstance.get(`/auto-transactions/transactions/search/user`,data);
}

const getAutoTrxByTrxType = (data) => {
    return axiosInstance.get(`/auto-transactions/transactions/search/type`,data);
}

const getAutoTransactionDTOById = (autoTrxId) => {
    return axiosInstance.get(`/auto-transactions/transaction-dto/search/id/${autoTrxId}`);
}

const getAutoTransactionById = (autoTrxId) => {
    return axiosInstance.get(`/auto-transactions/transaction/search/id/${autoTrxId}`);
}

const getTrxCount = () => {
    return axiosInstance.get(`/auto-transactions/count`);
}

const addAutoTransactionInformation = (newData) => {
    return axiosInstance.post('/auto-transactions/add',newData);
}

const updateAutoTransaction = (autoTrxId,data) => {
    return axiosInstance.put(`/auto-transactions/update/${autoTrxId}`,data);
}

const deleteAutoTransaction = (autoTrxId) => {
    return axiosInstance.delete(`/auto-transactions/delete/${autoTrxId}`);
}

const deleteAllTransactions = () => {
    return axiosInstance.delete('/auto-transactions/delete-all');
}

export default {
    getAllAutoTransactions,
    addAutoTransactionInformation,
    getAllAutoTransactionsPagination,
    deleteAllTransactions,
    getAutoTransactionDTOById,
    updateAutoTransaction,
    deleteAutoTransaction,
    getAutoTrxByVehicle,
    getAutoTrxByUser,
    getAutoTrxByTrxType,
    getAutoTransactionById,
    getTrxCount
}