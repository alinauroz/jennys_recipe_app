/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';

const store = configureStore();

const APP = () => {
    return (
        <Provider store = {store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => APP);

//AppRegistry.registerComponent(appName, () => App);
