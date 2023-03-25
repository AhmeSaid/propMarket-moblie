import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: sw(89),
      height: sh(90),
      backgroundColor: COLORS.whiteRgba(.16),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      // paddingHorizontal: 10,
      paddingVertical: 8,
      borderColor: COLORS.white
    },
    text: {
      marginTop: 8
    }
  });

export default createStyles;
