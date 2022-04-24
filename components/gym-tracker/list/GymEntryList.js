import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

const GymEntryList = () => {
    const [entries,setEntries] = useState([]);

    useEffect(() => {
        fetch('http://ec2-18-207-142-188.compute-1.amazonaws.com:8080/app/gym-tracker/all')
            .then((response) => response.json())
            .then((json) => setEntries(json))
            .catch((error) => console.log(error))
        }, [])

    console.log(entries)

    return (
        <ScrollView>
            <View style={styles.table}>
                {entries &&
                    entries.map((entry, index) => (
                        <TouchableOpacity style={styles.container} key={entry.exercise_id} avatar>
                            <Text>{`${entry.sets} ${entry.reps} ${entry.exerciseName}`}</Text>
                            <Text note>{`${entry.username}`}</Text>
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

export default GymEntryList;