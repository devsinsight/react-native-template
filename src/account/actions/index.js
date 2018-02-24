import * as actions from './types';
import { Actions } from 'react-native-router-flux';
import * as loginService from '../account.service';

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
    return async (dispatch) => {
        dispatch({ type: actions.LOADING });
        await loginService.login({ email, password })
            .then(response => loginSuccess(dispatch, response))
            .catch(response => loginFail(dispatch));
    };
};

const loginSuccess = (dispatch, response) => {
    dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: { user: 'jose', uid: '123456789'}
    });

    Actions.main();
};

const loginFail = (dispatch) => {
    dispatch({
        type: actions.LOGIN_FAIL,
        payload: 'Authentication Fail.'
    });
};
