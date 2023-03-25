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
    OtpText: {
      alignSelf: 'center',
      textAlign: 'center',
      width: sw(264)
    },
    SendOtpBtn: {
      marginTop: sh(90),
    },
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
      paddingTop: StatusBarManager.HEIGHT,
    },
    codeFieldRoot: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: sh(30),
      marginBottom: sh(24)
    },
    cell: {
      width: 50,
      height: 50,
      marginHorizontal: sw(8),
      borderRadius: 5,
      overflow: 'hidden',
      fontSize: 16,
      fontWeight: '600',
      color: COLORS.gray,
      lineHeight: 50,
      textAlign: 'center',
      justifyContent: 'center',
      textAlignVertical: 'center',
      alignSelf: 'center',
    },
    resendContainer:{
      marginTop: sh(14)
    }
  });

export default createStyles;
