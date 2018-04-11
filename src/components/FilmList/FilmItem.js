import React, {Component} from 'react'
import {View, Text, Image} from 'react-native';

import {styles} from "./styles";

export default class FilmItem extends Component {

    render() {

        return (
            <View style={styles.row}>
                <Text style={styles.text}> {this.props.title}</Text>
                <Image
                    source={{uri: this.props.icon}}
                    style={styles.icon}

                />
            </View>
        );

    }
}
