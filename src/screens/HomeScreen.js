import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import net from 'axios';
import { isEqual } from 'lodash';

import FilmList from "../components/FilmList/FilmList";
import Separator from "../components/FilmList/Separator";
import { goToFilm, getMoviesList } from '../actions/index'

const mapStateToProps = state => ({

  movies: state.movies,
  currentMovie: state.currentMovie,
});

const mapDispatchToProps = (dispatch) => ({
  getMoviesList: bindActionCreators(getMoviesList, dispatch),
});

 class HomeScreen extends Component {

   constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies,
      currentMovie: this.props.currentMovie,
    };
  }

  componentWillReceiveProps(newProps) {

    if (!isEqual(newProps, this.props)) {
      this.setState({
        movies: newProps.movies,
        currentMovie: newProps.currentMovie,
      });
    }
    console.log(this); // 
    console.log(this.state);
  }

 componentWillMount() {
   this.props.getMoviesList();

   console.log(this);
   console.log(this.state);
 }

  render() {
    return (
      <View>
        <StatusBar translucent={false} barStyle="default" />
        <FilmList movies={this.state.movies}/>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
