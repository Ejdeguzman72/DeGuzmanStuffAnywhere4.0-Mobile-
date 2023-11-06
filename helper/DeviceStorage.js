import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceStorage = {

    async saveKey(key,valueToSave) {
        try {
            await AsyncStorage.setItem(key,valueToSave);
        } 

        catch (error) {
            console.log(error);
        }
    },
    async deleteJwt() {
        try {
            await AsyncStorage.removeItem('DeguzmanStuffAnywhere_Mobile_Token');
        } catch(error) {
            console.log(error);
        }
    }
}

export default deviceStorage;