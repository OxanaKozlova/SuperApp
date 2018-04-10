import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Colors from '../../colors';
import { styles } from "./styles";
import { Link } from 'react-router-native';

export default class FilmItem extends Component {

  render(){
    
    return(
         <View style={styles.row}>
            <Text style={styles.text}> {this.props.title}</Text>
           <Image
               source={{url: this.props.poster}}
                style={styles.icon}
                removeClippedSubviews={true}
                 resizeMethod="resize"
             />
         </View>
    );

  }
}
