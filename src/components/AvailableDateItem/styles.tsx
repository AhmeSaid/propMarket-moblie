import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    
    itemContainer: {
      borderWidth: 0.5,
      borderColor: COLORS.inactive,
      width: 104,
      alignItems: 'center',
      borderRadius: 3,
    },
    itemDate: {
      width: '100%',
      height: 50,
      backgroundColor: COLORS.primary,
      alignItems: 'center',
      borderTopRightRadius: 3,
      borderTopLeftRadius: 3,
      justifyContent: 'center'
    },
    itemTime: {
      height: 110,
      alignItems: 'center',
      paddingVertical: 20
    },
    bookBtn: {
      height: 49,
      width: '100%',
      backgroundColor: COLORS.orange,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3
    }
  });

export default createStyles;
