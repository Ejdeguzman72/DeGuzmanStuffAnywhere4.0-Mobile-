import React from 'react';
import Axios from 'axios';

const getAllMedicalTransactions = () => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/medical-transactions/all');
}

const getAllTransactionsPagination = (params:any) => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/medical-transactions/all-transactions', { params });
}

const getTransactionById = (medical_tranasction_id:any) => {
    return Axios.get(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/medical-transactions/medical-transaction/${medical_tranasction_id}`);
} 

const addMedicalTransaction = (data:any) => {
    return Axios.post(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/medical-transactions/add-medical-transaction`,data);
}

const updateMedicalTransaction = (medical_tranasction_id:any,data:any) => {
    return Axios.put(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/medical-transactions/medical-transaction/${medical_tranasction_id}`,data);
}

const deleteMedicalTransaction = (medical_tranasction_id:any) => {
    return Axios.delete(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/medical-transactions/medical-transaction/${medical_tranasction_id}`)
}

const deleteAllTransactions = () => {
    return Axios.delete('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/medical-transactions/delete-all-medical-transactions');
}

export default {
    getAllMedicalTransactions,
    getAllTransactionsPagination,
    deleteAllTransactions,
    getTransactionById,
    addMedicalTransaction,
    updateMedicalTransaction,
    deleteMedicalTransaction
}