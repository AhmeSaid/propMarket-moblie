import {StyleSheet} from 'react-native';
import {COLORS, sh, sw, width} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    keyboardAvoiding: {
      flex: 1,
      alignSelf: 'center',
      width: width,
      backgroundColor: COLORS.grayBackground,
    },
    loc: {marginHorizontal: sw(18)},
    select: {
      height: sw(14),
      width: sw(14),
      borderRadius: sw(7),
      borderWidth: 0.5,
      borderColor: COLORS.gray,
    },
    unSelect: {
      // backgroundColor: COLORS.primary,
      borderColor: COLORS.primary,
    },
    ter: {
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderBottomWidth: 10,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderColor: COLORS.inactive,
      alignSelf: 'center',
      transform: [{rotate: '180deg'}],
      bottom: sh(-24.2),
    },
    terh: {
      borderLeftWidth: 9.8,
      borderRightWidth: 9.8,
      borderBottomWidth: 10,
      borderBottomColor: COLORS.white,
      bottom: sh(-12),
    },
    priceView: {paddingHorizontal: sw(18)},
    input: {
      borderRadius: 5,
      backgroundColor: COLORS.white,
      borderWidth: 0,
      shadowColor: COLORS.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
      marginTop: sh(10),
      marginHorizontal: sw(18),
    },
    cont: {
      marginBottom: sh(10),
    },
    flatlistRender: {
      marginBottom: sh(20),
      flex: 1,
    },
    text: {
      flex: 1,
    },
    title: {
      marginBottom: 12
    },
    thumbStyle: {
      backgroundColor: COLORS.white,
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    shadow: {
      paddingVertical: sh(14),
      paddingHorizontal: 20,
      backgroundColor: COLORS.white,
      marginBottom: 14
    },
    scroll: {width: width, flex: 1, marginTop: sh(10), paddingBottom: sh(4)},
    single: {
      paddingVertical: sh(14),
      marginTop: sh(14),
      paddingHorizontal: sw(18),
      borderBottomWidth: 0.2,
      borderColor: COLORS.gray,
    },
    bassment: {
      marginTop: 0,
    },
    any: {
      marginTop: 0,
      paddingVertical: sh(22),
    },
    anyLast: {
      paddingVertical: sh(22),
      paddingHorizontal: sw(18),
      borderColor: COLORS.gray,
    },
    arrow: {
      marginLeft: sw(5),
    },
    button: {
      marginHorizontal: sw(18),
      alignSelf: 'center',
      width: width - sw(36),
      marginTop: sh(14),
      backgroundColor: COLORS.primary,
    },
    pickerContainer: {
      position: 'absolute',
      zIndex: 1000,
    },
    selectedContainer: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      marginTop: 14
    }
  });

export default createStyles;
