import { AsyncStorage } from 'react-native';

export const getItem = async (key, callback ? ) => {
    let value = await AsyncStorage.getItem(callback);
    return JSON.parse(value);
}

export const setItem = async (key, json) => {
    let value = JSON.stringify(json);

    console.log("from storage", json)

    await AsyncStorage.setItem(key, value);
}
