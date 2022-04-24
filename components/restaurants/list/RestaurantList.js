import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/restaurants/all')
            .then((response) => response.json())
            .then((json) => setRestaurants(json))
            .catch((error) => console.log(error))
    }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                {restaurants &&
                    restaurants.map((restaurant, index) => (
                        <TouchableOpacity style={styles.container} key={restaurant.restaurant_id} avatar>
                            <Text>{`${restaurant.name} ${restaurant.descr}`}</Text>
                            <Text note>{`${restaurant.address} ${restaurant.city} ${restaurant.state}, ${restaurant.zip}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
            </View>
        </ScrollView>
    )
} 

const styles = StyleSheet.create({
    table: {
        padding: 10,
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        textAlign: 'center'
    },
    contact: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        fontFamily: 'monospace',
        fontSize: 15,
        justifyContent: 'center'
    },
    row: {
        padding: 10
    },
    listItem: {
        color: 'green'
    }
})

export default RestaurantList;