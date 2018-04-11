import React, { Component } from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import styles from './styles';

export default class Film extends Component {

   render(){
     const currentMovie  = this.props.currentMovie;
     if(!currentMovie) {
       return(<View />);
     }

     return(
       <ImageBackground
        style={styles.container}
        source={{uri: currentMovie.Poster}}
        blurRadius={7}
      >
       <View style={styles.container}>
         <View style={styles.header}>
          <View style={styles.leftContainer}>
             <Text style={styles.title} >{currentMovie.Title}</Text>
             <View style={styles.inline}>
               <Text style={styles.text}>Year:  </Text>
               <Text style={styles.description}>{currentMovie.Year}</Text>
             </View>
             <View style={styles.inline}>
              <Text style={styles.text}>Rating IMDB: </Text>
              <Text style={styles.description}>{currentMovie.Ratings[0].Value}</Text>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text}>Genre:  </Text>
              <Text style={styles.description}>{currentMovie.Genre}</Text>
            </View>
          </View>
           <Image
              style={styles.icon}
              source={{uri: currentMovie.Poster}}
            />
        </View>
        <View style={styles.bottomContainer}>

          <View style={styles.textBox}>
            <Text style={ styles.text }>Plot:  </Text>
            <Text style={styles.description} >{currentMovie.Plot}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>Actors:  </Text>
            <Text style={styles.description}>{currentMovie.Actors}</Text>
          </View>
        </View>
       </View>
       </ImageBackground>
     );
   }
}
