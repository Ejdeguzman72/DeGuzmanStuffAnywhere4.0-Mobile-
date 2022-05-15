import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceStorage = {


    saveKey(key,valueToSave) {
        try {
            AsyncStorage.setItem(key,valueToSave);
        } 

        catch (error) {
            console.log(error);
        }
    },

    loadJWT() {
        try {
            const value = AsyncStorage.getItem('DeguzmanStuffAnywhere_Mobile_Token');
            if (value !== null) {
                setJwt(value)
            } else {
                console.log(`value is null: `);
            }
        } catch (error) {
            console.log(error);
        }
    },

    deleteJwt() {
        try {
            AsyncStorage.removeItem('DeguzmanStuffAnywhere_Mobile_Token');
            // setJwt("");
        } catch(error) {
            console.log(error);
        }
    }
}

export default deviceStorage;