import {NativeModules, Platform, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES} from '../../../constants/theme';
const {StatusBarManager} = NativeModules;

const createStyles = () =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      marginBottom: sh(60),
    },
    bodyContainer: {
      paddingHorizontal: SIZES.smallPadding,
    },
    loginBtn: {padding: sh(3)},
    enterPassword: {
      marginVertical: sh(12),
    },
    confirmPassword: {marginTop: sh(14)},
    NewPasswordBtn: {
      marginTop: sh(14),
    },
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
    },
    container: {
      paddingTop: 0
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    circle: {
      width: 58,
      height: 58,
      borderRadius: 29,
      backgroundColor: COLORS.gray,
      marginTop: sh(20)
    }
  });

export default createStyles;
