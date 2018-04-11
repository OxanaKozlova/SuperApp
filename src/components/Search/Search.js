import React, {Component} from 'react'
import {View, TouchableOpacity, TextInput, Image} from 'react-native';

import styles from './styles';

export default class Search extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={this.props.onChangeText}
                    value={this.props.searchText}
                />
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={styles.button}>
                    <Image
                        style={styles.image}
                        source={require('./images/search.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
