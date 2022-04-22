import Axios from 'axios';

const getAllUsersService = () => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/users/all');
}

const getAllPendingUsersService = () => {
    return Axios.get(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/users/pending-users`);
}

// const getAllCustomUsersInfo = () => {
//     return Axios.get()
// }

export default {
    getAllUsersService,
    getAllPendingUsersService
};