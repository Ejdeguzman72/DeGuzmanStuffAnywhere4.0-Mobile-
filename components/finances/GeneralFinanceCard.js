import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Card, Divider } from 'react-native-paper';

const GeneralFinanceCard = ({ navigation }) => {
    return (
        <View>
            <View style={styles.card}>
                <Card style={styles.boxWithShadow}>
                    <Card.Title title="General Finance" subtitle="General Finance Information" />
                    <Card.Content>
                        <Button
                            color='black' title="General Finance" onPress={() => navigation.navigate('General-Finances')}
                        />
                    </Card.Content>
                    <Card.Cover source={require('../../assets/finance-pics/general-finance.jpg')} style={styles.cardCoverImg} />

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
});

export default GeneralFinanceCard;