import Axios from 'axios';

const getAllVehicleInformation = () => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/vehicles/all');
}

const getAllVehicles = (params:any) => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/vehicles/all-vehicles', { params });
}

const getVehicleInformationById = (vehicleId:any) => {
    return Axios.get(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/vehicles/vehicle/${vehicleId}`);
}

const updateVehicleInformation = (vehicleId:any,data:any) => {
    return Axios.put(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/vehicles/vehicle/${vehicleId}`,data);
}

const deleteAllVehicles = () => {
    return Axios.delete('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/vehicles/delete-all-vehicles');
}

const deleteVehicle = (vehicleId:any) => {
    return Axios.delete(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/vehicles/vehicle/${vehicleId}`);
}

export default {
    getAllVehicleInformation,
    getAllVehicles,
    deleteAllVehicles,
    getVehicleInformationById,
    updateVehicleInformation,
    deleteVehicle
};