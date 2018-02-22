import * as actions from './types';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export const emailChanged = (text) => {
    return {
        type: actions.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: actions.PASSWORD_CHANGED,
        payload: text
    };
};

export const login = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: actions.LOADING });

        axios.get('http://google.com')
            .then( response => loginSuccess(dispatch, response))
            .catch( response => loginFail(dispatch));
    };
};

const loginSuccess = (dispatch, response) => {
    dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: { user: 'jose', uid: '123456789'}
    });

    Actions.employeeList();
};

const loginFail = (dispatch) => {
    dispatch({
        type: actions.LOGIN_FAIL,
        payload: 'Authentication Fail.'
    });
};
