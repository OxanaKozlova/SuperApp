import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import Navigator from './routes';
import thunk from 'redux-thunk';

import HomeScreen from './screens/HomeScreen';

const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator onNavigationStateChange={null} />
      </Provider>
    );
  }
}
