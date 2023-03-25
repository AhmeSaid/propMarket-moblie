import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
      alignSelf: 'center',
      width: '100%',
    },

    sep: {
      height: sh(5),
      backgroundColor: COLORS.orange,
      marginBottom: sh(10),
    },
    footer: {
      height: sh(40),
      marginBottom: sh(10),
    },
    flatList: {paddingTop: sh(10)},
    bottom: {
      height: sh(72),
      paddingHorizontal: sw(30),
      paddingVertical: sh(20),
    },
  });

export default createStyles;
