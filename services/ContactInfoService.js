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

const getContactInfo = () => {
    return axiosInstance.get('/person-info/all');
}

const getAllContactInfo = (params) => {
    return axiosInstance.get('/person-info/all-contacts', { params });
}

const getContactInfoById = (personId) => {
    return axiosInstance.get(`/person-info/contact/id/${personId}`);
}

const getContactsByLastName = (data) => {
    return axiosInstance.get(`/person-info/contact/lastname`,data)
}

const getContactsByEmail = (data) => {
    return axiosInstance.get(`/person-info/contact/email`,data);
}

const getContactsByPhone = (data) => {
    return axiosInstance.get(`/person-info/contact/email`,data)
}

const getContactCount = () => {
    return axiosInstance.get(`/person-info/count`);
}

const addContactInfo = (data) => {
    return axiosInstance.post('/person-info/add', data);
}

const updateContactInfo = (personId, data) => {
    return axiosInstance.put(`/person-info/update/${personId}`, data);
}

const deleteContactById = (personId) => {
    return axiosInstance.delete(`/person-info/delete/${personId}`);
}

const deleteAllContactInfo = () => {
    return axiosInstance.delete('/person-info/delete-all');
}

export default {
    getContactInfo,
    deleteAllContactInfo,
    getAllContactInfo,
    getContactsByLastName,
    getContactsByEmail,
    getContactsByPhone,
    getContactCount,
    addContactInfo,
    getContactInfoById,
    updateContactInfo,
    deleteContactById
};