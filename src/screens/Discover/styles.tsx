import {NativeModules, Platform, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw, width} from '../../constants/theme';
const {StatusBarManager} = NativeModules;

const createStyles = () =>
  StyleSheet.create({
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
    },
    back: {marginHorizontal: 15, padding: 5},
    text: {marginHorizontal: sw(20), marginBottom: sh(22)},
    reco: {
      marginHorizontal: sw(20),
      marginBottom: sh(22),
      marginTop: sh(14),
    },
    shadow: {height: sh(14), width: '100%', backgroundColor: COLORS.flbg},
  });

export default createStyles;
