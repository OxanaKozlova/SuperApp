import { StyleSheet } from 'react-native';
import Colors from '../../colors';

export const styles =  StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      paddingHorizontal: 20,
      paddingVertical: 16,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: Colors.white,
    },
    text: {
      color: Colors.darkText,
      fontSize: 16,
      flex: 0.8,
    },
    separator: {
      backgroundColor: Colors.border,
      height: StyleSheet.hairlineWidth,
      flex: 1,
      marginLeft: 20,
    },
    icon: {
      borderRadius: 10,
      width: 50,
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0.2,
    },
});
