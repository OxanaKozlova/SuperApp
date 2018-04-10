import { StyleSheet } from 'react-native';
import Colors from '../../colors';

export default styles =  StyleSheet.create({
    container: {
      marginLeft: 5,
      marginRight: 5,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: Colors.white,
    },
    title: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 20,
      margin: 3,
    },
    description: {
      flex: 1,
      fontSize: 14,
      color: Colors.darkText,
    },
    icon: {
      flex:1,
      height: 200,
      alignItems: 'stretch',
      backgroundColor: Colors.darkText,
    },
});
