import axios from 'axios';
import * as Storage from './json-storage.service';

export class CustomHttp {

    instance;
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://reqres.in/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + this.getAuthToken()}
          });
    }

    async getAuthToken() {
        return await Storage.getItem('auth-token');
    }

    get(url, params) {
        return axios.get(url, this.instance);
    }

    post(url, params) {
        return axios.post(url, params, this.instance);
    }
}
