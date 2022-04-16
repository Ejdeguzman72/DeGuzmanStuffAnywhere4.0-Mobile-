import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Title from '../../components/title/Title';
import AddBookBtn from '../../components/books/buttons/AddBookBtn';
import ViewAllBooksBtn from '../../components/books/buttons/ViewAllBooksBtn';
import BookDetailsCard from '../../components/books/card/BookDetailsCard';

const BookScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <Title />
                <View style={styles.row}>
                    <ViewAllBooksBtn />
                    <AddBookBtn />
                </View>
                <BookDetailsCard />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default BookScreen;