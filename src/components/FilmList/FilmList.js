import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, Image, FlatList, } from 'react-native';
import Colors from '../../colors';
import { styles } from "./styles";
import { goToFilm } from '../../actions/index'
import Separator from './Separator';
import FilmItem from './FilmItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-native';

export default class FilmList extends Component {
  render(){
    const { movies } = this.props;

    return(
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <Link
              to={`/film/${item.imdbID}`}
              >
              <FilmItem
                title={item.Title}
                icon={item.Poster}
                id={item.imdbID}
              />
            </Link>

          )}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item.imdbID}
        />
      </View>
    );
  }
}
