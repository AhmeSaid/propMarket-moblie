import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: '49%',
      backgroundColor: COLORS.white,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingTop: 11,
      paddingBottom: 14,
      borderColor: COLORS.blue
    },
    textStyle: {
      marginTop: 10
    }
  });

export default createStyles;
