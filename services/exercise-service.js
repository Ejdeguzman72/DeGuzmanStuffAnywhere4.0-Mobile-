import Axios from 'axios';

const GetAllExercise = () => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/gym-tracker/all');
}

const getAllExerciseInformation = (params) => {
    return Axios.get('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/gym-tracker/all-exercises', { params } );
};

const getExerciseInformationById = (exercise_id) => {
    return Axios.get(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/gym-tracker/exercise/${exercise_id}`);
}

const addExerciseInformation = (data) => {
    return Axios.post('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/gym-tracker/add-exercise-information',data);
}

const updateExerciseinformation = (exercise_id,data) => {
    return Axios.put(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/gym-tracker/exercise/${exercise_id}`,data);
}

const deleteExercise = (exercise_id) => {
    return Axios.delete(`http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/gym-tracker/exercise/${exercise_id}`);
}

const deleteAllExercises = () => {
    return Axios.delete('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/gym-tracker/delete-all-exercises');
}

export default {
    GetAllExercise, getAllExerciseInformation, deleteAllExercises, addExerciseInformation, updateExerciseinformation, deleteExercise, getExerciseInformationById
}