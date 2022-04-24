import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/books/all')
            .then((response) => response.json())
            .then((json) => setBooks(json))
            .catch((error) => console.log(error));
    }, []);

    return (
        <ScrollView>
            <View style={styles.table}>
                {books &&
                    books.map((book, index) => (
                        <TouchableOpacity style={styles.container} key={book.book_id} avatar>
                            <Text>{`${book.title} ${book.author}`}</Text>
                            <Text note>{`${book.descr}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
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