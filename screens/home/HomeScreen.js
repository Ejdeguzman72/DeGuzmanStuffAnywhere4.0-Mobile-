import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView, Alert, Pressable } from 'react-native';
import BookRecCard from '../../components/home/BookRecCard';
import ContactInfoCard from '../../components/home/ContactInfoCard';
import FinanceCard from '../../components/home/FinanceCard';
import MusicCard from '../../components/home/MusicCard';
import RecipesCard from '../../components/home/RecipesCard';
import RestaurantCard from '../../components/home/RestaurantCard';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container} >
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <BookRecCard navigation={navigation}/>
                <ContactInfoCard navigation={navigation} />
                <FinanceCard navigation={navigation} />
                <MusicCard navigation={navigation} />
                <RecipesCard navigation={navigation} />
                <RestaurantCard navigation={navigation} />
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        // alignItems: 'center',
        //justifyContent: 'center',
    },
    homeScreenTitle: {
        borderColor: 'black',
        borderWidth: 5
    },
    image: {
        flex: 1,
        resizeMode: "cover"
    },
    text: {
        color: "black"
    },
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
    button: {
        borderRadius: 25
    },
    loginButton: {
        margin: 10,
        padding: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 25,
        // width: 400,
        borderRadius: 10
    },
    titleContainer: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 50,
        margin: 10,
        // width: 350,
        height: 70,
        flexDirection: 'row',
        fontSize: 20,
        borderColor: 'black',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: 'black',
        // padding: 10,
        // textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    addCenteredView: {
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
    addModalView: {
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
        elevation: 5,
        height: 300,
        width: 300,
        fontSize: 20
    },
    descriptionSize: {
        fontSize: 10
    },
    modalButtonView: {
        alignItems: 'center'
    },
    modalButton: {
        // position: 'absolute',
        backgroundColor: 'rgb(40,44,53)',
        borderRadius: 50,
        // height: 80,
        margin: 10
    },
    dateInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 15,
        width: 300,
        borderRadius: 10
    },
    buttonOpen: {
        backgroundColor: "black",
    },
    buttonClose: {
        backgroundColor: "black",
        // width: 300
    },
    textStyle: {
        color: "white",
        // fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        margin: 10,
        padding: 10
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 30
    },
    pickerstyles: {
        width: 300,
        textAlign: 'center',
        // margin: 10,
        backgroundColor: 'white',
        fontSize: 30
    },
    pickerView: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 350,
        textAlign: 'center',
        fontSize: 50,
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
    }
});