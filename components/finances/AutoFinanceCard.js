import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Card, Divider } from 'react-native-paper';

const AutoFinanceCard = ({ navigation }) => {
    return (
        <View>
            <View style={styles.card}>
                <Card style={styles.boxWithShadow}>
                    <Card.Title title="Auto Finance" subtitle="Automotive Finance Information" />
                    <Card.Content>
                        <View style={styles.buttonView}>
                            <Button
                                color='black' title="Auto Finance" onPress={() => navigation.navigate('Auto-Finances')}
                            />
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                color='black' title="Auto Repair Shops" onPress={() => navigation.navigate('Auto-Shops')}
                            />
                        </View>
                        <View style={styles.buttonView}>
                            <Button
                                color='black' title="Vehicles" onPress={() => navigation.navigate('Vehicles')}
                            />
                        </View>
                    </Card.Content>
                    <Card.Cover source={require('../../assets/finance-pics/auto.jpg')} style={styles.cardCoverImg} />

                </Card>
            </View>

            <Divider />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        // alignItems: 'center',
        //justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    text: {
        color: "black"
    },
    card: {
        padding: 20
    },
    cardCoverImg: {
        margin: 10
    },
    boxWithShadow: {
        borderColor: 'black',
        borderWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    buttonView: {
        margin: 10
    }
});

export default AutoFinanceCard;