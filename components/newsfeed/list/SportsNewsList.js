import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, FlatList, Image, Button } from 'react-native';
import { Divider } from 'react-native-paper';
import { Alert } from 'react-native';
import NewsService from '../../../services/NewsService';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const PAGE_SIZE = 10;

const SportsNewsList = () => {
    const [entries, setEntries] = useState([]);
    const [currentEntry, setCurrentEntry] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [modalVisible, setModalVisible] = useState(!modalVisible)
    const [page, setPage] = useState(1);
    const [selectedValue,setSelectedValue] = useState('')
    const [types,setTypes] = useState(['News','Business','Finance','Political','Sports','Technology']);

    const loadMoreArticles = () => {
        setPage(page + 1)
    }

    setActiveEntry = (entry, index) => {
        setCurrentEntry(entry);
        setCurrentIndex(index)
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        NewsService.getPoliticalNews()
            .then((response) => {
                setEntries(prevArticles => [...prevArticles, ...response.data.articles]);
            })
            .catch((error) => console.log(`Error fetching data: ${error}`))
    }, [page])

    return (
        <View>
            <FlatList
                data={entries}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={{ marginBottom: 16 }}>
                            {/* <Image
                                    source={{ uri: item.urlToImage }}
                                    style={{ width: '100%', height: 200, resizeMode: 'cover' }}
                                /> */}
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>
                                {item.title}
                            </Text>
                            <Text style={{ fontSize: 14 }}>{item.author}</Text>
                            <Text style={{ fontSize: 14 }}>{item.url}</Text>
                            <Text style={{ fontSize: 14, marginBottom: 8 }}>
                                Published on {item.publishedAt}
                            </Text>
                            <Text style={{ fontSize: 14 }}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <Button title="Load More" onPress={loadMoreArticles} />
        </View>
    )
}

const styles = StyleSheet.create({
    table: {
        padding: 10,
        flex: 1
    },
    view: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        textAlign: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderTopWidth: 1
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
    },
    centeredView: {
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
    buttonClose: {
        backgroundColor: 'black',
        width: 350,
        margin: 10,
        padding: 10
    },
    modalButton: {
        // width: 200,
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 30
    },
    indexText: {
        height: 100,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 35,
        width: 300,
        textAlign: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    picker: {
        flex: 1,
        marginVertical: 30,
        width: '100%',
        padding: 10,
        borderWidth: 5,
        borderColor: "black",
        backgroundColor: 'white'
    }
});

export default SportsNewsList;