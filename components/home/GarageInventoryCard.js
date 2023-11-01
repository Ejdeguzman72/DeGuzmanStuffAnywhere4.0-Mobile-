import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { Card, Divider } from 'react-native-paper';

const GarageInventoryCard = ({ navigation }) => {
    return (
        <View>
            <View style={styles.card}>
                <Card style={styles.boxWithShadow}>
                    <Card.Title title="Garage Inventory" />
                    <Card.Content>
                        <Text>Check Garage Inventory</Text>
                        <Button
                            color='rgb(40,44,53)' title="Garage Inventory" onPress={() => navigation.navigate('Garage Inventory')}
                        />
                    </Card.Content>
                    <Card.Cover source={require('../../assets/home-screen-pics/garage-inv.jpeg')} style={styles.cardCoverImg} />
                </Card>
            </View>
            <Divider />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20
    },
    boxWithShadow: {
        borderColor: 'black',
        borderWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5
    },
    cardCoverImg: {
        margin: 10
    }
});

export default GarageInventoryCard;