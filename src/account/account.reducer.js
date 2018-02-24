import * as actions from './actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.EMAIL_CHANGED :
            return { ...state, email: action.payload };
        case actions.PASSWORD_CHANGED : 
            return { ...state, password: action.payload };
        case actions.LOGIN_SUCCESS :
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case actions.LOGIN_FAIL :
            return { ...state, error: action.payload, password: '', loading: false };
        case actions.LOADING :
            return { ...state, loading: action.payload, error: '', loading: true  };
        default:
            return state;
    };
};
