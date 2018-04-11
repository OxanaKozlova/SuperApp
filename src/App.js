import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {NativeRouter, Route, BackButton} from 'react-router-native'
import {createStore, applyMiddleware} from 'redux';

import HomeScreen from './screens/HomeScreen';
import FilmScreen from './screens/FilmScreen';
import SearchScreen from './screens/SearchScreen';
import MapScreen from './screens/MapScreen';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NativeRouter>
                    <BackButton>
                    <View style={{flex: 1}}>
                        <Route exact path="/" component={HomeScreen}/>
                        <Route path="/film/:id" component={FilmScreen}/>
                        <Route path="/search" component={SearchScreen}/>
                        <Route path="/map" component={MapScreen}/>
                    </View>
                    </BackButton>
                </NativeRouter>
            </Provider>
        );
    }
}
