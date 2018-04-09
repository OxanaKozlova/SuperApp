import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default class Film extends Component {
   static propTypes = {
     description: PropTypes.string.isRequired,
     icon: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired
   };

   render(){

     film = {
       title: "Title",
       icon: "icon",
       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.d"};


     return(
       <View style={styles.container}>
         <Text style={styles.title} >{film.title}</Text>
         <Image
             source={require('./images/check.png')}
              style={styles.icon}
             resizeMode="contain"
           />
        <Text style={styles.description} >{film.description}</Text>
       </View>
     );
   }
}
