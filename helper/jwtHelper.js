// import AsyncStorage from '@react-native-community/async-storage';

export const jwtHelper = () => {
    let token = AsyncStorage.getItem('DeGuzmanStuffAnywhere_Mobile_Token')
    console.log(token + " this is the token from jwt helper");
    return token
}