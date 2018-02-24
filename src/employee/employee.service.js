import * as CustomHttp from '../shared/services/custom-http.service';

export const employeeFetch = async () => {
    return await CustomHttp.get('/api/unknown');
};
