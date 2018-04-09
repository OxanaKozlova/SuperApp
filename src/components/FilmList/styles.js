import { StyleSheet } from 'react-native';
import Colors from '../../colors';

export const styles =  StyleSheet.create({
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
    },
    separator: {
      backgroundColor: Colors.border,
      height: StyleSheet.hairlineWidth,
      flex: 1,
      marginLeft: 20,
    },
    icon: {
      borderRadius: 15,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
});
