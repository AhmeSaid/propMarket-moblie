import {Platform, StyleSheet} from 'react-native';
import {
  COLORS,
  height,
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
    },
    separator: {height: 10},
    headersIcons: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'flex-end',
      width: '100%',
      marginTop: sh(56),
    },
    row: {flexDirection: 'row'},
    or2: {marginLeft: sw(26), marginRight: sw(27)},
    flat: {
      paddingTop: sh(18),
      paddingBottom: sh(100),
      flex: 1,
      height: '100%',
    },
    cir: {
      height: sh(11),
      width: sw(11),
      borderRadius: sw(5.5),
      backgroundColor: COLORS.orange,
      marginRight: sw(6),
    },
    sale: {
      borderRightWidth: 0.5,
      borderColor: COLORS.gray,
      paddingRight: sw(7.5),
      marginRight: sw(7.5),
    },
    padding: {paddingVertical: 5},
    icon: {marginLeft: sw(20), marginRight: sw(4)},
    share: {marginLeft: sw(16), marginRight: sw(4)},
    or: {
      marginHorizontal: sw(7.5),
    },
    panel: {
      alignSelf: 'center',
      width: '100%',
      
    },
    panelContentContainer: {
      paddingHorizontal: SIZES.smallPadding,
      flexGrow: 1
    },
    details: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    rowText: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: sh(10),
    },
    view: {
      flexDirection: 'row',
      paddingHorizontal: sw(17),
      borderRightWidth: 0.5,
      borderLeftWidth: 0.5,
      marginHorizontal: sw(26),
      borderColor: COLORS.gray,
    },
    description: {marginBottom: sh(12), marginTop: sh(31)},
    facts: {
      marginTop: sh(31),
    },
    buttonsView: {
      backgroundColor: COLORS.white,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: sw(18),
      width: '100%',
      paddingBottom: sh(30),
      paddingTop: sh(10),
    },
    button: {
      flex: 0.315,
      backgroundColor: COLORS.white,
      borderColor: COLORS.primary,
      borderWidth: 1,
      height: sh(40),
      borderRadius: 3,
    },
    tour: {
      backgroundColor: COLORS.primary,
    },
    img: {alignSelf: 'center'},
    flatlistRender: {
      flexDirection: 'row',
      marginBottom: sh(19),
    },
    text: {
      flex: 1,
    },
    x: {
      paddingHorizontal: 20,
    },
    linkText: {
      marginVertical: 20
    }
  });

export default createStyles;
