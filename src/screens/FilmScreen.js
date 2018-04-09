import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilmItem from "../components/FilmList/FilmList";
import { getFilmList } from '../actions/index'

 class FilmScreen extends Component {

  render() {
    return (
      <View>
        <StatusBar translucent={false} barStyle="default"/>
        <FilmList />
      </View>
    );
  }
}

export default connect()(FilmScreen);
