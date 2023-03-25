import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: sw(45),
      height: sw(45),
      backgroundColor: COLORS.whiteRgba(.16),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      // paddingHorizontal: 10,
      borderColor: COLORS.white
    },
    text: {
    }
  });

export default createStyles;
