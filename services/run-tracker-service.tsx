import Axios from 'axios';

const getAllRunTrackerInfo = () => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/run-tracker-app/all');
}

const getAllRunsPagination = (params:any) => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/run-tracker-app/all-runs', { params} );
}

const getRunTrackerById = (run_id:any) => {
    return Axios.get(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/run-tracker-app/run/${run_id}`);
}

const updateRunInformation = (run_id:any,data:any) => {
    return Axios.put(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/run-tracker-app/run/${run_id}`,data);
}

const deleteRun = (run_id:any) => {
    return Axios.delete(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/run-tracker-app/run/${run_id}`);
}

const deleteAllRunsInfo = () => {
    return Axios.delete('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/run-tracker-app/delete-all-runs');
}

export default {
    getAllRunTrackerInfo,
    getAllRunsPagination,
    deleteAllRunsInfo,
    getRunTrackerById,
    updateRunInformation,
    deleteRun
};