import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { ListItem, Left, Body, Right, Icon } from 'native-base';
import AutoShopService from '../../../services/autoshop-service';

const AutoShopList = () => {

    const [autoshops, setAutoShops] = useState([]);

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/auto-repair-shops/all')
            .then((response) => response.json())
            .then((json) => setAutoShops(json))
            .catch((error) => console.log(error))
    }, [])

    return (
        <ScrollView>
            <View style={styles.table}>
                {autoshops &&
                    autoshops.map((autoshop, index) => (
                        <TouchableOpacity style={styles.container} key={autoshop.auto_shop_id} avatar>
                            <Text>{`${autoshop.auto_shop_name}`}</Text>
                            <Text note>{`${autoshop.address} ${autoshop.city} ${autoshop.state} ${autoshop.zip}`}</Text>
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

export default AutoShopList;