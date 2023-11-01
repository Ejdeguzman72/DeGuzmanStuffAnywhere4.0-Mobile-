import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllPosts = (params) => {
    return Axios.get('http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/posts/all-posts', { headers: authHeader(), params });
}

const getAllPostsInfo = () => {
    return Axios.get('http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/posts/all', { headers: authHeader() })
}

const getPostByUser = (data) => {
    return Axios.get(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/posts/user`, data, { headers: authHeader() });
}

const addPost = (newData) => {
    return Axios.post(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/posts/add`, newData, { headers: authHeader() })
}

const deletePost = (data) => {
    return Axios.delete(`http://ec2-54-196-51-159.compute-1.amazonaws.com:8080/app/posts/delete`, data, { headers: authHeader() });
}

export default {
    getAllPosts, getPostByUser, addPost, deletePost, getAllPostsInfo
}