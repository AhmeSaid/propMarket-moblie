import {StyleSheet} from 'react-native';
import {COLORS, sh} from '../../constants/theme';

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
    header: {paddingHorizontal: 20},
    noResult: {
      alignSelf: 'center',
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
    },
  });

export default createStyles;
