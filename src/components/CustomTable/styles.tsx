import {Platform, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw, width} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    headerStyle: {
      width: width - sw(32),
      alignSelf: 'center',
      paddingHorizontal: sw(16),
      backgroundColor: 'rgba(26, 140, 175, 0.4)',
      height: sh(43),
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: width - sw(32),
      alignSelf: 'center',
    },
  });

export default createStyles;
