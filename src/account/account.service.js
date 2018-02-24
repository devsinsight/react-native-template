import * as Storage from '../shared/services/json-storage.service';
import axios from 'axios';

export const login = ({ email, password, dispatch }) => {
    return axios.post('https://reqres.in/api/login', { email, password })
            .then( response => { storeToken(response.data.token) });
};

const storeToken = async (token) => {
    await Storage.setItem('token', token);
};
