import React from 'react';
import Axios from 'axios';

const GetAllUsers = () => {
    Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/users/all-users-information');
}

export default {
    GetAllUsers
}