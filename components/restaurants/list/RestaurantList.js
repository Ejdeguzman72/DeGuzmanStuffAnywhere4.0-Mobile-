import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';
import RestaurantService from '../../../services/RestaurantRecommendationsService';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [currentRestaurant, setCurrentRestaurant] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [modalVisible, setModalVisible] = useState(!modalVisible)

    const setActiveRestaurant = (restaurant, index) => {
        setCurrentRestaurant(restaurant)
        setCurrentIndex(index)
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        RestaurantService.GetAllRestaurantRecommendations()
            .then((response) => (response.data))
            .then((json) => setRestaurants(json.list))
            .catch((error) => console.log(`Error fetching data: ${error}`))
    }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                {restaurants &&
                    restaurants.map((restaurant, index) => (
                        <TouchableOpacity style={styles.container} key={index} avatar onPress={() => setActiveRestaurant(restaurant, index)}>
                            <Text>{`${restaurant.name}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
                {currentRestaurant ? (
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Restaurant Information</Text>
                            <View style={styles.indexText}>
                                <Text>Name:</Text><Text>{currentRestaurant.name}</Text>
                            </View>
                            <View style={styles.indexText}>
                                <Text>Address:</Text><Text>{currentRestaurant.address + ', ' + currentRestaurant.city + ' ' + currentRestaurant.state + ' ' + currentRestaurant.zip}</Text>
                            </View>
                            <View style={styles.indexText}>
                                <Text>Description:</Text><Text>{currentRestaurant.descr}</Text>
                            </View>
                            <Pressable
                                style={[styles.modalButton, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close </Text>
                            </Pressable>
                        </View>
                    </View>
                ) : null}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    table: {
        padding: 10,
        flex: 1
    },
    view: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 20,
        borderBottomWidth:1,
        borderTopWidth:1
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 5,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 100,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonClose: {
        backgroundColor: 'black',
        width: 350,
        margin: 10,
        padding: 10
    },
    modalButton: {
        // width: 200,
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 30
    },
    indexText: {
        height: 100,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 35,
        width: 300,
        textAlign: 'center',
        justifyContent: 'center',
        borderBottomWidth:1,
        borderTopWidth:1
    },
})

export default RestaurantList;