import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllMedicalOffices = () => {
    return Axios.get('http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/medical-offices/all', { headers: authHeader() });
}

const getAllMedicalOfficeInfo = (params) => {
    return Axios.get('http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/medical-offices/all-medical-offices', { headers: authHeader(), params });
}

const getMedicalOfficesByZip = (zip) => {
    return Axios.get(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/medical-offices/offices/search/zip/${zip}`, { headers: authHeader() })
}

const getMedicalOfficeById = (medicalOfficeId) => {
    return Axios.get(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/medical-offices/offices/search/id/${medicalOfficeId}`, { headers: authHeader() });
}

const getMedicalTrxCount = () => {
    return Axios.get('http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/medical-transactions/count', { headers: authHeader() })
}

const addMedicalOffice = (newData) => {
    return Axios.post("http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/medical-offices/add", newData, { headers: authHeader() });
}

const updateMedicalOfficeInformation = (medicalOfficeId,data) => {
    return Axios.put(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/medical-offices/update/${medicalOfficeId}`,data, { headers: authHeader() });
}

const deleteMedicalOffice = (medicalOfficeId) => {
    return Axios.delete(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/medical-offices/delete/${medicalOfficeId}`, { headers: authHeader() });
}

const deleteAllMedicalOffices = () => {
    return Axios.delete('http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/medical-offices/delete-all', { headers: authHeader() });
}


export default {
    getAllMedicalOffices,
    addMedicalOffice,
    getAllMedicalOfficeInfo,
    getMedicalOfficesByZip,
    deleteAllMedicalOffices,
    getMedicalOfficeById,
    getMedicalTrxCount,
    updateMedicalOfficeInformation,
    deleteMedicalOffice
}