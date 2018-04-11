import React, {Component} from 'react';
import {View} from 'react-native';

import {styles} from "./styles";

export default class Separator extends Component {
    render() {
        return (
            <View style={styles.separator}/>
        );
    }
}
