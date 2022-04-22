import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { ListItem, Left, Body, Right, Icon } from 'native-base';
import BookService from '../../../services/book-service';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        BookService.getAllBooks()
            .then((data) => setBooks(data.books))
            .catch((error) => {
                console.log(error);
            });
            console.log(books)
    }, []);

    return (
        <ScrollView>
            <View style={styles.table}>
                
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

export default BookList;