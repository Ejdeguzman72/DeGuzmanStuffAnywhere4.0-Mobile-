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
                {books &&
                    books.map((book) => (
                        <ListItem style={styles.container} key={book.book_id} avatar>
                            <Left>
                                
                            </Left>
                            <Body>
                                <Text>{`${book.title} ${book.author}`}</Text>
                            </Body>
                            <Right style={{ justifyContent: 'center' }}>
                                <Icon name="heart" style={{ paddingRight: 5, fontSize: 30 }} />
                            </Right>
                        </ListItem>
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