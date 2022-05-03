import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';

const MusicList = () => {
    const [music, setMusic] = useState([]);
    const [currentMusic, setCurrentMusic] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [modalVisible, setModalVisible] = useState(!modalVisible)

    setActiveMusic = (music, index) => {
        setCurrentMusic(music);
        setCurrentIndex(index)
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/music/all')
            .then((response) => response.json())
            .then((json) => setMusic(json))
            .catch((error) => console.log(error))
    }, [])

    console.log(music);

    return (
        <ScrollView>
            <View style={styles.table}>
                {music &&
                    music.map((music, index) => (
                        <TouchableOpacity style={styles.container} key={index} avatar onPress={() => setActiveMusic(music, index)}>
                            <Text>{`${music.title} ${music.artist}`}</Text>
                            <Text note>{`${music.genre}`}</Text>
                        </TouchableOpacity>
                    ))}
                <Divider />
                {currentMusic ? (
                    <View style={styles.view}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(!modalVisible)}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Music Information</Text>
                                    <View style={styles.indexText}>
                                        <Text>Title:</Text><Text>{currentMusic.title}</Text>
                                    </View>
                                    <View style={styles.indexText}>
                                        <Text>AutoTrxList:</Text><Text>{currentMusic.artist}</Text>
                                    </View>
                                    <View style={styles.indexText}>
                                        <Text>Genre:</Text><Text>{currentMusic.genre}</Text>
                                    </View>
                                    <Pressable
                                        style={[styles.modalButton, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Close </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </View>
                ) : null}
            </View>
        </ScrollView>
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
        padding: 20
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
        justifyContent: 'center'
    },
})

export default MusicList;