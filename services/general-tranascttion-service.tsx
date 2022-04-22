import React from 'react';
import Axios from 'axios';

const getAllGeneralTransactions = () => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/general-transactions/all');
}

const getAllTransactionsPagination = (params:any) => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/general-transactions/all-transactions', { params });
}

const getTransactionById = (transaction_id:any) => {
    return Axios.get(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/general-transactions/transaction/${transaction_id}`);
}

const addGeneralTransactionInformation = (newData: any) => {
    return Axios.post("http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/general-transaction/add-transaction-information", newData);
}

const updateTransactionInformation = (transaction_id:any,data:any) => {
    return Axios.put(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/general-transactions/transaction/${transaction_id}`,data);
}

const deleteTransaction = (transaction_id:any) => {
    return Axios.delete(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/general-transactions/transaction/${transaction_id}`);
}

const deleteAllTransactions = () => {
    return Axios.delete('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/general-transactions/delete-all-transactions');
}

export default {
    getAllGeneralTransactions,
    addGeneralTransactionInformation,
    getAllTransactionsPagination,
    deleteAllTransactions,
    getTransactionById,
    updateTransactionInformation,
    deleteTransaction
}