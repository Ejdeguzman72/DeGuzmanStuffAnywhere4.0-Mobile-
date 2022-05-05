import React from 'react';
import { View, Button, StyleSheet, Text, ScrollView } from 'react-native';
import { Card, Divider } from 'react-native-paper';

const DetailsCard = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.card}>
                <Card style={styles.boxWithShadow}>
                    <Card.Title title="Details" subtitle="DeGuzmanStuffAnywhere" />
                    <Text style={styles.text}>Mobile Application for deguzmanstuffanywhere to be used by family spread worldwide. </Text>
                    <Text style={styles.text}>Track Finances and other important information</Text>
                    <Text style={styles.text}>Keep track of favorite music, books, restaurants</Text>
                    <Text style={styles.text}>Check out the web application linked below</Text>
                    <Text style={styles.text}>Compete in fitness with the Fitness Tracker</Text>
                    <Card.Content>
                        <Button
                            color='rgb(40,44,53)' title="Web Application" onPress={() => navigation.navigate('http://deguzmanstuffanywhere-s3bucket.s3.amazonaws.com/index.html#/')}
                        />
                    </Card.Content>
                    <Card.Cover source={require('../../assets/website.png')} style={styles.cardCoverImg} />

                </Card>
            </View>
            <Divider />
        </ScrollView>
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
    },
    text: {
        margin: 10,
        fontSize: 15
    }
});

export default DetailsCard;