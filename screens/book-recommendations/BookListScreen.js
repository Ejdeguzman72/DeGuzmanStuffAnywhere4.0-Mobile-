import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import BookList from '../../components/books/list/BookList';

const BookListScreen = () => {
    return (
        <View style={styles.screen}>
            <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
                <BookList />
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
})

export default BookListScreen;