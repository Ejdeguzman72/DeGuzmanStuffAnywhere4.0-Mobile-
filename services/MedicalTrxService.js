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

const getAllMedicalTransactions = () => {
    return axiosInstance.get('/medical-transactions/all');
}

const getAllTransactionsPagination = (params) => {
    return axiosInstance.get('/medical-transactions/all-transactions', { params });
}

const getTransactionsByFacility = (medicalOfficeId) => {
    return axiosInstance.get(`/medical-transactions/transactions/search/facility/${medicalOfficeId}`)
}

const getTransactionsByType = (trxTypeId) => {
    return axiosInstance.get(`/medical-transactions/transactions/search/type/${trxTypeId}`)
}

const getTransactionsByUser = (userId) => {
    return axiosInstance.get(`/medical-transactions/transactions/search/user/${userId}`)
}

const getTransactionById = (medTrxId) => {
    return axiosInstance.get(`/medical-transactions/transaction/search/id/${medTrxId}`);
} 

const getTransactionDTOById = (medTrxId) => {
    return axiosInstance.get(`/medical-transactions/transaction-dto/search/id/${medTrxId}`)
}

const addMedicalTransaction = (data) => {
    return axiosInstance.post(`/medical-transactions/add`,data);
}

const updateMedicalTransaction = (medTrxId,data) => {
    return axiosInstance.put(`/medical-transactions/update/${medTrxId}`,data);
}

const deleteMedicalTransaction = (medTrxId) => {
    return axiosInstance.delete(`/medical-transactions/delete/${medTrxId}`)
}

const deleteAllTransactions = () => {
    return axiosInstance.delete('/medical-transactions/delete-all');
}

export default {
    getAllMedicalTransactions,
    getAllTransactionsPagination,
    getTransactionsByUser,
    getTransactionsByFacility,
    getTransactionsByType,
    deleteAllTransactions,
    getTransactionDTOById,
    getTransactionById,
    addMedicalTransaction,
    updateMedicalTransaction,
    deleteMedicalTransaction
}