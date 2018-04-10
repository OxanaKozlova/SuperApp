import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import net from 'axios';

import FilmList from "../components/FilmList/FilmList";
import Separator from "../components/FilmList/Separator";
import { goToFilm, getMoviesList } from '../actions/index';
import AppFooter from "../components/Footer/AppFooter";

const mapStateToProps = state => ({
  movies: state.movies,
  currentMovie: state.currentMovie,
});

const mapDispatchToProps = (dispatch) => ({
  getMoviesList: bindActionCreators(getMoviesList, dispatch),
});

 class HomeScreen extends Component {

 componentWillMount() {
   this.props.getMoviesList();
 }

  render() {
    return (
      <View>
        <StatusBar translucent={false} barStyle="default" />
        <FilmList movies={this.props.movies}/>
        <AppFooter />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
