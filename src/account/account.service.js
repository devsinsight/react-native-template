import * as Storage from '../shared/services/json-storage.service';
import axios from 'axios';

const loginUrl = 'https://reqres.in/api/login';

export const login = ({ email, password, dispatch }) => {
    return axios.post(loginUrl, { email, password })
            .then( response => { storeToken(response.data.token) });
};

const storeToken = async (token) => {
    await Storage.setItem('token', token);
};
