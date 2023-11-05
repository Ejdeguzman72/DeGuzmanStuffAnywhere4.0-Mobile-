import Axios from 'axios';

const getAllEntertainment = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app/entertainment/all')
}

const getAllEntertainmentTypes = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app/entertainment-types/all')
}

const getAllEntertainmentByType = (entertainmentTypeId) => {
    return Axios.get(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app/entertainment/all/type/${entertainmentTypeId}`);
}

const getEntertainmentById = (entityId) => {
    return Axios.get(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app/entertainment/search/${entityId}`)
}

const getEntertainmentByName = (name) => {
    return Axios.get(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app/entertainment/search/${name}`)
}

const addEntertainmentInfo = (data) => {
    return Axios.post(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app/entertainment/add`, data)
}

const updateEntertainmentInfo = (entityId, data) => {
    return Axios.put(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app/entertainment/update/${entityId}`,data)
}

const deleteEntertainment = (entityId) => {
    return Axios.delete(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app/delete/${entityId}`);
}

export default {
    getAllEntertainment,getAllEntertainmentByType,getEntertainmentById,getEntertainmentByName,
    addEntertainmentInfo,updateEntertainmentInfo,deleteEntertainment,getAllEntertainmentTypes
}