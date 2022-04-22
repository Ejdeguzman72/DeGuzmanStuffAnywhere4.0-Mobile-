import Axios from 'axios';

const getAllBooks = () => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/all');
}

// const getAllBookInformation = (params) => {
//     return http.get('/all-books', { params } );
// };

// const getBookInformationById = (book_id) => {
//     return http.get(`/book/${book_id}`);
// };

// const findBookByName = (name) => {
//     return http.get(`/find-book-by-name/${name}`);
// }

// const addBookInformation = (data) => {
//     return http.post(`/add-book-information`,data);
// };

// const updateBookInformation = (book_id,data) => {
//     return http.put(`/book/${book_id}`, data)
// };

// const deleteBookInformation = (book_id) => {
//     return http.delete(`/delete-book/book/${book_id}`);
// };

// const deleteAllBookInformation = () => {
//     return http.delete('/delete-all-books');
// }

export default {
    getAllBooks,
    // getAllBookInformation,
    // getBookInformationById,
    // addBookInformation,
    // findBookByName,
    // updateBookInformation,
    // deleteBookInformation,
    // deleteAllBookInformation
}