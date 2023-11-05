import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { Card, Divider } from 'react-native-paper';

const GymTrackerDetailsCard = () => {
    return (
        <View>
            <View style={styles.card}>
                <Card style={styles.boxWithShadow}>
                    <Card.Title title="Family Gym Tracker" />
                    <Card.Content>
                        <Text>Compete in Physical Strength Amonst the Family!</Text>
                    </Card.Content>
                    <Card.Cover source={require('../../../../assets/card-img/weightlifting.jpg')} style={styles.cardCoverImg} />
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

export default GymTrackerDetailsCard;