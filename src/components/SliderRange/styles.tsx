import {StyleSheet} from 'react-native';
import {COLORS, sh, sw, width} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    thumbStyle: {
      backgroundColor: COLORS.primary,
      borderColor: COLORS.white,
      borderWidth: 1,
      width: 24,
      height: 24,
      borderRadius: 12
    },
    ter: {
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderBottomWidth: 10,
      bottom: -16.7,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      color: 'transparent',
      overflow: 'hidden',
      alignSelf: 'center',
      transform: [{rotate: '180deg'}],
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderBottomColor: COLORS.inactive,
    },
    terh: {
      bottom: -6,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      alignSelf: 'center',
      transform: [{rotate: '180deg'}],
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderBottomWidth: 10,
      borderBottomColor: COLORS.white,
    },
    priceView: {
    },
    anyView: {
      backgroundColor: COLORS.white,
      alignSelf: 'center',
      paddingVertical: sh(10),
      borderColor: COLORS.inactive,
      borderWidth: 0.5,
      borderRadius: 3,
      alignItems: 'center',
      top: sh(20),
      paddingHorizontal: sw(36)
    },
  });

export default createStyles;
