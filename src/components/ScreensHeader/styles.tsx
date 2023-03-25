import {Platform, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw, width} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    rowView: {
      flexDirection: 'row',
      width: width - SIZES.smallPadding,
      alignSelf: 'center',
      alignItems: 'center',
      height: sh(45),
      justifyContent: 'space-between',
    },
    map: {
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: COLORS.primary,
      height: sh(40),
      paddingHorizontal: sh(5),
      alignItems: 'center',
      alignSelf: 'center',
    },
    mapText: {justifyContent: 'center'},
    whereYou: {
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: COLORS.primary,
      height: sh(40),
      paddingLeft: sw(24),
      paddingRight: sw(19),
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      flex: 1,
      marginHorizontal: sw(7),
    },
    row: {
      flex: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      height: 50,
      marginBottom: 15,
    },
  });

export default createStyles;
