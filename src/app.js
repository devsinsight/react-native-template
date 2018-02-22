import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Header } from './shared/components';
import reducers from './reducers';
import Login from './account/login';
import Router from './router';

export class App extends Component {
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }  
};
