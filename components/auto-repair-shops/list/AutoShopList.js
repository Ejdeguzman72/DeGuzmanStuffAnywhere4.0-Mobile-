import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { ListItem, Left, Body, Right, Icon } from 'native-base';
import AutoShopService from '../../../services/autoshop-service';

const AutoShopList = () => {

    const [autoshops, setAutoShops] = useState([]);

    useEffect(() => {
        AutoShopService.getAllAutoShops()
            .then((data) => setAutoShops(data.autoshops))
            .then(console.log(data))
            .catch((error) => {
                console.log(error)
            });

            console.log(autoshops)
    })

    return (
        <ScrollView>
            <View style={styles.table}>
                
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

export default AutoShopList;