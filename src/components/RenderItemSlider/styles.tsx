import {Platform, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw, width} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    rowShow: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    flatListText: {
      fontSize: 15,
      marginHorizontal: sw(3),
      paddingBottom: sh(2),
    },
  });

export default createStyles;
