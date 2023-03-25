import {Platform, NativeModules, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw} from '../../../constants/theme';
const {StatusBarManager} = NativeModules;
const createStyles = () =>
  StyleSheet.create({
    container: {
      paddingTop: sh(100),
    },
    bodyContainer: {
      paddingHorizontal: SIZES.smallPadding,
      alignItems: 'center',
    },
    loginBtn: {
      padding: sh(3),
    },
    logo: {
      height: sh(68),
      width: sh(171),
    },
    register: {
      marginBottom: sh(67),
    },
    inputContainer: {
      marginTop: sh(14),
    },
    Btn: {
      marginTop: sh(14),
    },
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
      paddingTop: StatusBarManager.HEIGHT,
    },
    hello: {
      marginTop: sh(40),
      marginBottom: sh(10),
    },
    trustedText: {
      width: sw(252),
      textAlign: 'center',
    },
    tabsContainer: {
      width: 214,
      height: 40,
      backgroundColor: COLORS.inactiveBtn,
      borderRadius: 22,
      marginTop: sh(30),
      padding: 5,
      flexDirection: 'row',
      marginBottom: sh(16),
    },
    tab: {
      width: '50%',
      height: '100%',
      backgroundColor: COLORS.primary,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    termsTextContainer: {
      width: sw(306),
      alignSelf: 'flex-start',
      marginTop: sh(14),
    },
    termsText: {
      color: COLORS.primary,
    },
    forgetPass: {
      alignSelf: 'flex-end',
      marginTop: 10,
    },
    forgetPassContainer: {
      width: '100%',
    },
  });

export default createStyles;
