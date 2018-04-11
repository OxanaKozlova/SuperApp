import {StyleSheet} from 'react-native';

import Colors from '../../colors';

export default styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: 'row'
    },
    input: {
        backgroundColor: Colors.white,
        flex: 0.95,
    },
    button: {
        flex: 0.15,
    },
    image: {
        backgroundColor: Colors.white,
        flex: 1,
        height: 35,
        width: 45,
    }
});
