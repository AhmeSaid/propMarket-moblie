import {NativeModules, Platform, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES} from '../../../constants/theme';
const {StatusBarManager} = NativeModules;

const createStyles = () =>
  StyleSheet.create({
   
    bodyContainer: {
      paddingHorizontal: SIZES.smallPadding,
      alignItems: 'center',
    },
    
    loginBtn: {padding: sh(3)},
    forgetPasswordBtn: {
      marginTop: sh(14),
    },
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
      // paddingTop: StatusBarManager.HEIGHT,
    },
  });

export default createStyles;
