import * as CustomHttp from '../shared/services/custom-http.service';

export const employeesFetch = async () => {
    return await CustomHttp.get('/api/unknown');
};

export const employeeCreate = async (employee) => {
    return await CustomHttp.post('/api/users', employee);
};