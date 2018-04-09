import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Colors from '../../colors';
import { styles } from "./styles";

export default class FilmItem extends Component {

  constructor(props) {
      super(props);
  }

  render(){
    return(
      <TouchableHighlight  onPress={this.props.onPress} underlayColor={Colors.border}>
         <View style={styles.row}>
           <Text style={styles.text} >{this.props.title}</Text>
           <Image
               source={{url: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                style={styles.icon}
                removeClippedSubviews=
                {true}
                 resizeMethod="resize"
             />
         </View>
       </TouchableHighlight>
    );

  }
}
