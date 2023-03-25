import {Platform, StyleSheet} from 'react-native';
import {
  COLORS,
  sh,
  SIZES,
  StatusHeight,
  sw,
  width,
} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
      alignSelf: 'center',
      paddingTop: StatusHeight + 14,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width,
      paddingHorizontal: sw(20),
      alignItems: 'center',
    },
    textInput: {width: '95%', justifyContent: 'center', paddingHorizontal: 5},
    input: {
      borderRadius: 5,
      backgroundColor: COLORS.white,
      borderWidth: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    cont: {
      paddingRight: sw(18),
      width: sw(339),
    },
    forView: {
      borderRadius: 5,
      backgroundColor: COLORS.white,
      borderWidth: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    sale: {
      backgroundColor: COLORS.primary,
      height: sh(32),
      paddingHorizontal: sw(8),
      borderRadius: 10,
    },
    loc: {
      paddingHorizontal: sw(20),
      marginVertical: sh(10),
      borderTopWidth: 0.3,
      borderBottomWidth: 0.3,
      paddingVertical: sh(12),
      borderColor: COLORS.border,
    },
    locData: {
      paddingHorizontal: sw(20),
      marginTop: sh(12),
    },
    locSelect: {
      backgroundColor: '#4AB7C329',
      paddingVertical: sh(8),
      paddingHorizontal: sw(12),
      marginRight: sw(4),
      borderRadius: 3,
      borderColor: COLORS.primary,
      borderWidth: 0.5,
      marginBottom: sh(3),
      flexDirection: 'row',
      alignItems: 'center',
    },
    textSearch: {
      marginVertical: sh(3),
      marginHorizontal: sw(20),
    },
  });

export default createStyles;
