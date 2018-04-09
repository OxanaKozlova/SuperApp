import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, Image, FlatList, } from 'react-native';
import Colors from '../../colors';
import { styles } from "./styles";
import { goToFilm } from '../../actions/index'
import Separator from './Separator';
import FilmItem from './FilmItem';
import { connect } from 'react-redux';

export default class FilmList extends Component {

 handlePress = (id) => {
   this.props.navigation.navigate('Film');
 };

  render(){
    const { movies } = this.props;

    return(
      <View>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <FilmItem
              title={item.Title}
              icon={item.Poster}
              onPress={() => this.handlePress(item.id)}
            />
          )}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
