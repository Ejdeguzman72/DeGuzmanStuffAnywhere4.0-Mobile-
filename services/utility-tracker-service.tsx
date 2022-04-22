import Axios from 'axios';

const getAllUtilityTrackerInformation = () => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/utility-information/all');
}

export default {
    getAllUtilityTrackerInformation
};