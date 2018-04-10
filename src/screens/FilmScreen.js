import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Film from "../components/Film/Film";
import { getMovie } from '../actions/index'

const mapStateToProps = state => ({
  currentMovie: state.currentMovie,
});

const mapDispatchToProps = (dispatch) => ({
  getMovie: bindActionCreators(getMovie, dispatch),
});

 class FilmScreen extends Component {

  componentWillMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    console.log(this.props.currentMovie);
    return (
      <View>
        <StatusBar translucent={false} barStyle="default"/>
        <Film currentMovie={this.props.currentMovie}/>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmScreen);
