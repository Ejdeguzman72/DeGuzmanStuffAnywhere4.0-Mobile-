import React from 'react';
import Axios from 'axios';

const getAllRecipes = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8081/app/recipes/all');
}

const getAllRecipesPagination = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8081/app/recipes/all-recipes');
}

const getRecipesByType = (recipeTypeId,page) => {
    return Axios.get(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8081/app/recipes/all/types/${recipeTypeId}?page=${page}`)
}

const getRecipeByName = (name) => {
    return Axios.get(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8081/app/recipes/search/name/${name}`)
}

const getRecipesById = (recipeId) => {
    return Axios.get(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8081/app/recipes/search/recipe/id/${recipeId}`)
}

const addRecipeInformation = (data) => {
    return Axios.post('http://ec2-54-224-136-155.compute-1.amazonaws.com:8081/app/recipes/add', data);
}

const updateRecipeInformation = (recipeId, recipe) => {
    return Axios.put(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8081/app/recipes/update/${recipeId}`, recipe);
}

const deleteRecipeInformation = (recipeId) => {
    return Axios.delete(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8081/app/recipes/delete/${recipeId}`);
}

const getRecipeTypes = () => {
    return Axios.get(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8081/app/recipe-types/all`)
}

export default {
    getAllRecipes,getAllRecipesPagination,getRecipesByType,getRecipeByName,getRecipesById,
    addRecipeInformation,updateRecipeInformation,deleteRecipeInformation,getRecipeTypes
}