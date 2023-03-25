import {StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: COLORS.background,
      paddingVertical: sh(16),
      paddingHorizontal: sw(20),
      justifyContent: 'space-between'
    },
    titleStyle: {
      marginLeft: sw(6)
    },
    leftPart: {
      flexDirection: 'row',
      alignItems: 'center'
    }
   
  });

export default createStyles;
