import React, { Component } from 'react';
import { View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import net from 'axios';
import { isEqual } from 'lodash';

import FilmList from "../components/FilmList/FilmList";
import Separator from "../components/FilmList/Separator";
import { goToFilm, getMoviesList, searchMovies } from '../actions/index';
import AppFooter from "../components/Footer/AppFooter";

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  searchMovies: bindActionCreators(searchMovies, dispatch),
});

 class SearchScreen extends Component {
   constructor(props) {
     super(props);

     this.state = {
       searchText: '',
       movies: this.props.movies,
     };
   }

   onChangeText = (searchText) => {
     this.setState({
       searchText,
     });
   }

   onPress = () => {
     this.props.searchMovies(this.state.searchText);
   }

  componentWillReceiveProps(newProps) {
    if (!isEqual(this.props, newProps)) {
      this.setState({
        movies: newProps.movies,
        searchText: '',
      });
    }
  }

   componentWillMount() {

   }

  render() {
    return (
      <View>
        <StatusBar translucent={false} barStyle="default" />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.onChangeText}
          value={this.state.searchText}
        />
        <TouchableOpacity onPress={this.onPress} style={{height: 50, borderColor: 'gray', borderWidth: 1}}>

        </TouchableOpacity>
        <FilmList movies={this.state.movies}/>
        <AppFooter />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
