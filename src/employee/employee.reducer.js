import * as actions from './actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actions.EMPLOYEE_SYNC_FORM:
            return {...state, [action.payload.prop] : action.payload.value };
        case actions.EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case actions.EMPLOYEES_FETCH:
            return { ...state, employees: action.payload };
        default:
            return state;
    };
};
