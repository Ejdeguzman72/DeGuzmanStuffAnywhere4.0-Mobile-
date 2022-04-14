import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Card, Divider } from 'react-native-paper';

const RecipesCard = ({ navigation }) => {
    return (
        <View>
            <View style={styles.card}>
                <Card style={styles.boxWithShadow}>
                    <Card.Title title="Recipes" subtitle="Family Recipes" />
                    <Card.Content>
                        <Button
                            color='rgb(40,44,53)' title="Recipes" onPress={() => navigation.navigate('Recipes')}
                        />
                    </Card.Content>
                    <Card.Cover source={require('../../assets/home-screen-pics/kitchen.jpg')} style={styles.cardCoverImg} />

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

export default RecipesCard;