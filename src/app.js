import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './shared/components';
import reducers from './reducers';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header title="HEADER TEMPLATE" />
                <Text>Hello World</Text>
            </View>
        </Provider>
    );
};

export default App;
