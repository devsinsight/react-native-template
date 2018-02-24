import { AsyncStorage } from 'react-native';

export const getItem = async (key, callback ? ) => {
    return await AsyncStorage.getItem(key, callback);
}

export const setItem = async (key, value) => {
    await AsyncStorage.setItem(key, value);
}
