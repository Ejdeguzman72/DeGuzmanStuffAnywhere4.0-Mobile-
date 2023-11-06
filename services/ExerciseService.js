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


const GetAllExercise = () => {
    return axiosInstance.get('/gym-tracker/all');
}

const getAllExerciseInformation = (params) => {
    return axiosInstance.get('/gym-tracker/all-exercises', { params });
};

const getAllExercisesByUser = (userId) => {
    return axiosInstance.get(`/gym-tracker/exercises/search/user/${userId}`);
}

const getAllExercisesByType = (exerciseTypeId) => {
    return axiosInstance.get(`/gym-tracker/exercises/search/type/${exerciseTypeId}`);
}

const getExerciseInfoDTOById = (exerciseId) => {
    return axiosInstance.get(`/gym-tracker/exercise-dto/search/id/${exerciseId}`);
}

const getExerciseInformationById = (exerciseId) => {
    return axiosInstance.get(`/gym-tracker/exercise/search/id/${exerciseId}`);
}

const addExerciseInformation = (data) => {
    return axiosInstance.post('/gym-tracker/add', data);
}

const updateExerciseinformation = (exerciseId,data) => {
    return axiosInstance.put(`/gym-tracker/update/${exerciseId}`, data);
}

const deleteExercise = (exerciseId) => {
    return axiosInstance.delete(`/gym-tracker/delete/${exerciseId}`);
}

const deleteAllExercises = () => {
    return axiosInstance.delete('/gym-tracker/delete-all');
}

const getAllExerciseTypes = () => {
    return axiosInstance.get('/exercise-type/all')
}

export default {
    GetAllExercise, 
    getAllExerciseInformation, 
    getAllExercisesByType, 
    getAllExercisesByUser, 
    getExerciseInfoDTOById, 
    deleteAllExercises, 
    addExerciseInformation, 
    updateExerciseinformation, 
    deleteExercise, 
    getExerciseInformationById,
    getAllExerciseTypes
}