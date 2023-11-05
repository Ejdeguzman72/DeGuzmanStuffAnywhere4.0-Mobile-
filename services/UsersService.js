import Axios from 'axios';
import authHeader from './AuthHeader';

const GetAllUsers = () => {
    Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app/users/all-users-information', { headers: authHeader() });
}

export default {
    GetAllUsers
}