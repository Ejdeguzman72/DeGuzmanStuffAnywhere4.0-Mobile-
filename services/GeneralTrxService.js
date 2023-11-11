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

const getAllGeneralTransactions = () => {
    return axiosInstance.get('/general-transactions/all');
}

const getAllTransactionsPagination = (params) => {
    return axiosInstance.get('/general-transactions/all-transactions', { params });
}

const getAllTransactionsByType = (trxTypeId) => {
    return axiosInstance.get(`/general-transactions/search/type/${trxTypeId}`)
}

const getAllTransactionsByUser = (userId) => {
    return axiosInstance.get(`/general-transactions/search/user/${userId}`)
}

const getGeneralTransactionDTOById = (genTrxId) => {
    return axiosInstance.get(`/general-transactions/tranasction-dto/search/id/${genTrxId}`)
}

const getTransactionById = (genTrxId) => {
    return axiosInstance.get(`/general-transactions/transaction/search/id/${genTrxId}`);
}

const addGeneralTransactionInformation = (newData) => {
    return axiosInstance.post("/general-transactions/add", newData);
}

const updateTransactionInformation = (genTrxId,data) => {
    return axiosInstance.put(`/general-transactions/update/${genTrxId}`,data);
}

const deleteTransaction = (genTrxId) => {
    return axiosInstance.delete(`/general-transactions/delete/${genTrxId}`);
}

const deleteAllTransactions = () => {
    return axiosInstance.delete('/general-transactions/delete-all');
}

export default {
    getAllGeneralTransactions,
    addGeneralTransactionInformation,
    getAllTransactionsPagination,
    deleteAllTransactions,
    getTransactionById,
    updateTransactionInformation,
    deleteTransaction,
    getAllTransactionsByType,
    getAllTransactionsByUser,
    getGeneralTransactionDTOById
}