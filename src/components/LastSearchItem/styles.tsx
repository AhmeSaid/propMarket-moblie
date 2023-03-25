import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: 200,
      height: 35,
      backgroundColor: COLORS.whiteRgba(.16),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingHorizontal: 10
    }
  });

export default createStyles;
