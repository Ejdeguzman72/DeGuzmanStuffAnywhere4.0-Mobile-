import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllUtilityTrackerInformation = () => {
    return Axios.get('http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/utility-information/all', { headers: authHeader() });
}

export default {
    getAllUtilityTrackerInformation
};