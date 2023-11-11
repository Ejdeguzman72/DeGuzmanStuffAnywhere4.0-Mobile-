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

const getAllBooks = () => {
    return axiosInstance.get('/books/all');
}

const getAllBookInformation = (params) => {
    return axiosInstance.get('/books/all-books', { params });
};

const getBooksByAuthor = (author) => {
    return axiosInstance.get(`/books/book/search/author/${author}`);
}

const getBookInformationById = (bookId) => {
    return axiosInstance.get(`/books/book/search/id/${bookId}`);
};

const findBookByName = (title) => {
    return axiosInstance.get(`/books/book/search/title/${title}`);
}

const addBookInformation = (data) => {
    return axiosInstance.post(`/books/add`, data);
};

const updateBookInformation = (bookId, book) => {
    return axiosInstance.put(`/books/update/${bookId}`, book)
};

const deleteBookInformation = (bookId) => {
    return axiosInstance.delete(`/books/delete/${bookId}`);
};

const deleteAllBookInformation = () => {
    return axiosInstance.delete('/books/delete-all');
}

export default {
    getAllBooks,
    getAllBookInformation,
    getBookInformationById,
    addBookInformation,
    findBookByName,
    updateBookInformation,
    deleteBookInformation,
    deleteAllBookInformation,
    getBooksByAuthor
}