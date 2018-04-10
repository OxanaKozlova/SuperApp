import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers, { initialState } from './reducers';
import thunk from 'redux-thunk';
import { NativeRouter, Route, Link } from 'react-router-native'

import HomeScreen from './screens/HomeScreen';
import FilmScreen from './screens/FilmScreen';



const store = createStore(reducers, applyMiddleware(thunk));
// const Router = connect()(ReactNativeRouter.Router);

// const store = createStore(
//   combineReducers({
//     reducers,
//     routing: routerReducer
//   }),
//   applyMiddleware(thunk)
// );


export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <NativeRouter>
        <View>
           <Route exact path="/" component={HomeScreen} />
           <Route path="/film/:id" component={FilmScreen} />
         </View>
       </NativeRouter>
      </Provider>
  );
  }
}
