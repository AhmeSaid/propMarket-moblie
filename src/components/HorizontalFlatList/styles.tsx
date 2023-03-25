import {Platform, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw, width} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    horizontalView: {
      width: sw(209),
      borderBottomWidth: 5,
      borderColor: COLORS.orange,
    },
    horizontalImg: {
      width: '100%',
      height: sh(192),
    },
    bottom: {
      alignSelf: 'flex-start',
      marginLeft: sw(18),
      marginVertical: sh(10),
    },
    icon: {marginRight: sw(4)},
    share: {marginLeft: sw(16), marginRight: sw(4)},
    or: {
      marginHorizontal: sw(7.5),
    },
    top: {
      position: 'absolute',
      alignItems: 'flex-end',
      paddingHorizontal: sw(13),
      marginTop: 11,
      paddingVertical: sh(6),
      alignSelf: 'flex-end',
    },
  });

export default createStyles;
