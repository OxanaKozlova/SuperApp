import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Film from "../components/Film/Film";
import { getMovie } from '../actions/index'
import AppFooter from "../components/Footer/AppFooter";

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
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent={false} barStyle="default"/>
        <Film currentMovie={this.props.currentMovie}/>
        <AppFooter />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmScreen);
