import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import MusicService from '../../../services/music-service';

const MusicList = () => {
    const [music, setMusic] = useState([]);

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
                        <TouchableOpacity style={styles.container} key={music.song_id} avatar>
                            <Text>{`${music.title} ${music.artist}`}</Text>
                            <Text note>{`${music.genre}`}</Text>
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

export default MusicList;