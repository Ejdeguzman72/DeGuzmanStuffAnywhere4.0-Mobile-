import React from 'react';
import Axios from 'axios';

const getContactInfo = () => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/person-info/all');
}

const getAllContactInfo = (params) => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/person-info/all-contacts', { params });
}

const getContactInfoById = (person_id) => {
    return Axios.get(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/person-info/person/${person_id}`);
}

const addContactInfo = (data) => {
    return Axios.post('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/person-info/add-contact-info', data);
}

const updateContactInfo = (person_id, data) => {
    return Axios.put(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/person-info/person/${person_id}`, data);
}

const deleteContactById = (person_id) => {
    return Axios.delete(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/person-info/person/${person_id}`);
}

const deleteAllContactInfo = () => {
    return Axios.delete('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/person-info/all-contacts');
}

export default {
    getContactInfo,
    deleteAllContactInfo,
    getAllContactInfo,
    addContactInfo,
    getContactInfoById,
    updateContactInfo,
    deleteContactById
};