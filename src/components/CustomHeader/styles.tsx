import {Platform, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw, width} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    horizontalView: {
      marginBottom: sh(8),
      marginLeft: sh(16),
      width: sh(200),
    },
    horizontalImg: {
      width: '100%',
      borderRadius: 10,
    },
    aboutRoomHorizontal: {
      position: 'absolute',
      height: sh(43),
      backgroundColor: COLORS.primary,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      width: '100%',
      bottom: 0,
      opacity: 0.9,
      borderBottomEndRadius: 10,
      borderBottomStartRadius: 10,
    },
    horizontalText: {
      fontSize: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
  });

export default createStyles;
