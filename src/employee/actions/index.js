import { Actions,  } from 'react-native-router-flux';
import * as actions from './types';
import { Employee } from '../models/employee';
import * as EmployeeService from '../employee.service';

export const employeeSyncForm = ({ prop, value }) => {
    return {
        type: actions.EMPLOYEE_SYNC_FORM,
        payload: { prop, value }
    };
};

export const employeeCreate = (employee) => {
    return (dispatch) => {
        EmployeeService.employeeCreate(employee)
            .then( response => {
                console.log("response: ", response)
                dispatch({ type: actions.EMPLOYEE_CREATE })
                Actions.employeeList();
            });

    };
};

export const employeesFetch = () => {
    return (dispatch) => {
        EmployeeService.employeesFetch()
            .then(response => {
                dispatch({ type: actions.EMPLOYEES_FETCH, payload: response.data.data });
            });
        };
};
