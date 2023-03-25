import {NativeModules, Platform, StyleSheet} from 'react-native';
import {hexToRgba} from '../../../constants/hexToRgba';
import {COLORS, sh, SIZES, sw} from '../../../constants/theme';
const {StatusBarManager} = NativeModules;

const createStyles = () =>
  StyleSheet.create({
    container: {
      paddingTop: sh(230),
    },
    bodyContainer: {
      paddingHorizontal: SIZES.smallPadding,
      alignItems: 'center',
    },
    loginBtn: {padding: sh(3)},
    SendOtp: {
      marginBottom: sh(93),
    },
    successText: {
      marginTop: sh(40)
    },
    SendOtpBtn: {
      marginTop: sh(90),
    },
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
    },
   
    btn: {
      width:sw(191),
      marginTop: sh(74)
    }
  });

export default createStyles;
