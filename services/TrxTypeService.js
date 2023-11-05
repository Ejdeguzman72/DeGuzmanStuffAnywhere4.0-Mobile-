import Axios from 'axios';

const getAllTrxTypes = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app/transaction-types/all');
}

export default {
    getAllTrxTypes
}