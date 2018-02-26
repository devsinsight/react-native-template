import axios from 'axios';
import * as Storage from './json-storage.service';

const baseUrl = 'https://reqres.in';

export const get = async (url, params) => {
    const token = await Storage.getItem('token');

    return axios.request({
                url: baseUrl + url,
                method: 'get',
                baseUrl,
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
}

export const post = async (url, params) => {
    const token = await Storage.getItem('token');

    return axios.request({
                url: baseUrl + url,
                method: 'post',
                baseUrl,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                params
            });

}
