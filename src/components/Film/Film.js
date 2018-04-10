import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default class Film extends Component {

   render(){
     const currentMovie  = this.props.currentMovie;
     if(!currentMovie) {
       return(<View />);
     }
     return(
       <View style={styles.container}>
         <Text style={styles.title} >{currentMovie.Title}</Text>
         <Image
             source={{url: currentMovie.Poster}}
              style={styles.icon}
             resizeMode="contain"
           />
        <Text style={styles.description} >{currentMovie.Plot}</Text>
        <Text style={styles.description}>{currentMovie.Actors}</Text>
       </View>
     );
   }
}
