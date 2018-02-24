import { Actions,  } from 'react-native-router-flux';
import * as actions from './types';
import { Employee } from '../models/employee';


export const employeeSyncForm = ({ prop, value }) => {
    return {
        type: actions.EMPLOYEE_SYNC_FORM,
        payload: { prop, value }
    };
};

export const employeeCreate = (employee) => {
    return (dispatch) => {
        dispatch({ type: actions.EMPLOYEE_CREATE })
        Actions.main();
        Actions.employeeList();
    };
};

export const employeesFetch = () => {
    return (dispatch) => {
        
    };
};
