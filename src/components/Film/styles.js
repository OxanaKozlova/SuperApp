import {StyleSheet} from 'react-native';

import Colors from '../../colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    header: {
        flex: 0.3,
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderColor: 'green',
    },
    inline: {
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    leftContainer: {
        flex: 0.7,
    },
    bottomContainer: {
        flex: 0.7,
        justifyContent: 'flex-start',
    },
    icon: {
        flex: 0.3,
        height: 160,
        width: 100,
        borderColor: Colors.darkText,
    },
    textBox: {
        marginBottom: 10,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        color: 'white',
        fontSize: 14,
    },

});
