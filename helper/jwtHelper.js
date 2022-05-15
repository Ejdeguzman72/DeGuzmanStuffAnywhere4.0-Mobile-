import AsyncStorage from '@react-native-async-storage/async-storage';

export const jwtHelper = () => {
    let token = AsyncStorage.getItem('DeGuzmanStuffAnywhere_Mobile_Token')
    return token
}