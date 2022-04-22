import Axios from 'axios';

const getAllPosts = (params) => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/posts/all-posts', { params });
}

const getPostByUser = (user_id) => {
    return Axios.get(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/posts/user/${user_id}`);
}

const addPost = (newData) => {
    return Axios.post(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/posts/add-post`, newData)
}

const deletePost = (post_id) => {
    return Axios.delete(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/posts/post/${post_id}`);
}

export default {
    getAllPosts,getPostByUser,addPost,deletePost
}