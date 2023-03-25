import {Platform, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw, width} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    rowShow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: sh(10),
      borderBottomWidth: 0.5,
      borderColor: COLORS.shadow,
      paddingHorizontal: sw(12.5),
    },
    flatListText: {
      fontSize: 15,
      marginHorizontal: sw(3),
      flex: 1,
    },
  });

export default createStyles;
