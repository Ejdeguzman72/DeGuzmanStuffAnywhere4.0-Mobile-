import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = Axios.create({
    baseURL: 'http://ec2-54-224-136-155.compute-1.amazonaws.com:8080/app',
});

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('DeGuzmanStuffAnywhere');
        return token;
    } catch (error) {
        console.error(`Error retrieving token: ${error}`)
        return null;
    }
}

axiosInstance.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})

const getAllMusic = () => {
    return axiosInstance.get('/music/all');
}

const getAllMusicPagination = (params) => {
    return axiosInstance.get('/music/all-songs', { params });
}

const getSongById = (songId) => {
    return axiosInstance.get(`/music/song/id/${songId}`);
}

const getSongByTitle = (title) => {
    return axiosInstance.get(`/music/song/title/${title}`);
}

const getSongByArtist = (artist) => {
    return axiosInstance.get(`/music/all/artist/${artist}`);
}

const getSongsByGenre = (genre) => {
    return axiosInstance.get(`/music/all/genre/${genre}`)
}

const getSongCount = () => {
    return axiosInstance.get(`/music/count-of-songs`)
}

const addSongInformaton = (data) => {
    return axiosInstance.post('/music/add-song-information', data);
}

const updateSongInformation = (songId,data) => {
    return axiosInstance.put(`/music/update/${songId}`,data);
}

const deleteSongInformation = (songId) => {
    return axiosInstance.delete(`/music/delete/${songId}`);
}

const deleteAllSongs = () => {
    return axiosInstance.delete('/music/delete-all');
}

export default {
    getAllMusic,
    getAllMusicPagination,
    getSongById,
    getSongByTitle,
    getSongByArtist,
    addSongInformaton,
    updateSongInformation,
    deleteSongInformation,
    deleteAllSongs
}