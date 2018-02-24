import { combineReducers } from 'redux';
import AuthReducer from './account/account.reducer';
import EmployeeReducer from './employee/employee.reducer';

export default combineReducers({
    auth: AuthReducer,
    employee: EmployeeReducer
});
