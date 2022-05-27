import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { ImageBackground, StyleSheet, Text, View, Modal, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import GenresPicker from '../../pickers/GenresPicker';

const AddMusicModal = () => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [submitted, setSubmitted] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const newSong = () => {
        setTitle('');
        setArtist('');
        setGenre('');
        setSubmitted(false);
    }

    const onHandleTitleChange = (input) => { setTitle(input) }

    const onHandleArtistChange = (input) => { setArtist(input) }

    const onHandleGenreChange = (input) => { setGenre(input) }

    const onSubmit = (event) => {
        event.preventDefault();
        const data = {
            artist: artist,
            title: title,
            genre: genre,
        }

        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/music/add-song-information', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("Added new song information")
            setSubmitted(true)
        }).catch((error) => console.log(error))
    }

        return (
            <View >
                <ImageBackground source={require('../../../assets/app-background.jpg')} style={styles.image} >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        {submitted ? (
                            <View style={styles.addCenteredView}>
                                <View style={styles.addModalView}>
                                    <Text style={styles.modalText}>Add Music</Text>
                                    <Text>{title} has been submitted!</Text>
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={newSong}
                                    >
                                        <Text style={styles.textStyle}>Add</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Close </Text>
                                    </Pressable>
                                </View>
                            </View>
                        ) : (
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>

                                    <Text style={styles.modalText}>Add Music</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Title"
                                        value={title}
                                        onChangeText={(event) => onHandleTitleChange(event)}
                                    />
                                    
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Enter Artist"
                                        value={artist}
                                        onChangeText={(event) => onHandleArtistChange(event)}
                                    />
                                    
                                    <GenresPicker />

                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={(event) => onSubmit(event)}
                                    >
                                        <Text style={styles.textStyle}>Submit</Text>
                                    </Pressable>
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Close </Text>
                                    </Pressable>

                                </View>
                            </View>
                        )}
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.buttonText}>Add Music</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        )
    
}

const styles = StyleSheet.create({
    view: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    image: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#ADD8E6",
        padding: 10,
        width: 160,
        height: 160,
        borderRadius: 50,
        margin: 10,
        backgroundColor: '#20B2AA'
    },
    buttonView: {
        fontSize: 30,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 10
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 20,
        textTransform: 'uppercase'
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
    closeButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 10,
    },
    buttonClose: {
        backgroundColor: 'black',
        width: 300
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 25,
        width: 300,
        borderRadius: 10
    },
    modalButton: {
        // width: 200,
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
});

export default AddMusicModal;