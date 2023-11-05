import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import NewsRoomService from '../../../services/NewsService';

const WeatherCard = ({ navigation }) => {
    const [weather,setWeather] = useState({
        clouds: "",
        main: "",
        description: "",
        wind: "",
        city: "",
        mainTemp: 0,
        minTemp: 0,
        maxTemp: 0,
        humidity: 0,
    })

    const convertKelvinToFahrenheit = (kelvin) => {
        return Math.round((kelvin - 273.15) * 1.8 + 32)
    }

    const getWeather = () => {
        const city = "New York"
        NewsRoomService.getWeatherForCity(city)
            .then(response => {
                const data = response.data
                setWeather({
                    clouds: data.clouds.all,
                    main: data.weather[0].main,
                    description: data.weather[0].description,
                    city: data.name,
                    mainTemp: convertKelvinToFahrenheit(data.main.temp),
                    minTemp: convertKelvinToFahrenheit(data.main.temp_min),
                    maxTemp: convertKelvinToFahrenheit(data.main.temp_max),
                    humidity: data.main.humidity
                })
            })
            .catch(error => {
                console.log(error)
            }, []);
    }

    useEffect(() => {
        getWeather();
    }, [])

    return (
        <View>
            <View style={styles.card}>
                <Card style={styles.boxWithShadow}>
                    <Card.Title title="Weather"/>
                    <Card.Content>
                        <Text>{weather.city}</Text>
                        <Text>Weather - {weather.mainTemp}°F {weather.main}</Text>
                        <Text>Description = {weather.description}</Text>
                        <Text>Minimum Temperature - {weather.minTemp}°F</Text>
                        <Text>Maximum Temperature - {weather.maxTemp}°F</Text>
                    </Card.Content>
                    <Card.Cover source={require('../../../assets/card-img/weather.jpeg')} style={styles.cardCoverImg} />
                </Card>
            </View>
            <Divider />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        // padding: 20
    },
    boxWithShadow: {
        borderColor: 'black',
        borderWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
    },
    cardCoverImg: {
        margin: 10,
        width: 300,
        height: 100
    }
});

export default WeatherCard;