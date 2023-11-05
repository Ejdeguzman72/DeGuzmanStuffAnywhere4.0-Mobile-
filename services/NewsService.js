import Axios from 'axios';

const getWeather = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8082/app/jokes/joke');
}

const getTopHeadlines = (page,PAGE_SIZE) => {
    return Axios.get(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8082/app/news/all?page=${page}&pageSize=${PAGE_SIZE}`);
}

const getBusinessNews = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8082/app/news/business/all')
}

const getFinanceNews = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8082/app/news/finance/all')
}

const getPoliticalNews = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8082/app/news/political/all')
}

const getSportsNews = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8082/app/news/sports/all')
}

const getTechnologyNews = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8082/app/news/technology/all')
}

const searchNewsTopic = (topic) => {
    return Axios.get(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8082/app/news/search/${topic}`)
}

const getWeatherForCity = (city) => {
    return Axios.get(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8082/app/weather/city/${city}`);
}

const getStockInfo = (stock) => {
    return Axios.get(`http://ec2-54-224-136-155.compute-1.amazonaws.com:8082/app/stocks/search/${stock}`);
}

const getJoke = () => {
    return Axios.get('http://ec2-54-224-136-155.compute-1.amazonaws.com:8082/app/jokes/joke')
}

export default {
    getWeather,getTopHeadlines,getBusinessNews,getFinanceNews,getPoliticalNews,
    getSportsNews,getTechnologyNews,searchNewsTopic,getWeatherForCity,getStockInfo,
    getJoke
}