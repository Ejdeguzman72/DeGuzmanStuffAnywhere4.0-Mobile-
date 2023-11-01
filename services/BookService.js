import authHeader from './AuthHeader';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getAllBooks = () => {
    return Axios.get(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/books/all`, { headers: authHeader() });
}

const getAllBookInformation = (params) => {
    return Axios.get('http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/books/all-books', { headers: authHeader() });
};

const getBooksByAuthor = (author) => {
    return Axios.get(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/books/book/search/author/${author}`, { headers: authHeader() });
}

const getBookInformationById = (bookId) => {
    return Axios.get(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/books/book/search/id/${bookId}`, { headers: authHeader() });
};

const findBookByName = (title) => {
    return Axios.get(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/books/book/search/title/${title}`, { headers: authHeader() });
}

const addBookInformation = (data) => {
    return Axios.post(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/books/add`,data, { headers: authHeader() });
};

const updateBookInformation = (bookId,book) => {
    return Axios.put(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/books/update/${bookId}`, book, { headers: authHeader() })
};

const deleteBookInformation = (bookId) => {
    return Axios.delete(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/books/delete/${bookId}`, { headers: authHeader() });
};

const deleteAllBookInformation = () => {
    return Axios.delete('http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/books/delete-all', { headers: authHeader() });
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