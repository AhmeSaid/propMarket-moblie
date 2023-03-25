import {NativeModules, StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';
const {StatusBarManager} = NativeModules;

const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: COLORS.grayBackground,
      flex: 1,
    },
    headerContainer: {
      paddingTop: sh(63),
      paddingHorizontal: sw(20),
      paddingBottom: sh(20),
      backgroundColor: COLORS.background
    },
    propMarketText: {
      alignSelf: 'center',
      marginBottom: sh(12)
    },
    registerBtns: {
      marginTop: sh(38),
      paddingHorizontal: 0
    },
    titleStyle: {
      marginLeft: sw(20),
      marginVertical: sh(10)
    },
    line:{
      backgroundColor: COLORS.gray,
      height: .5
    },
    signOutBtn: {
      backgroundColor: COLORS.primary,
      borderRadius: 3,
      marginBottom: sh(20)
    },
    logoutContainer: {
      paddingHorizontal: sw(20),
      marginTop: sh(24)
    },
    socialContainer: {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: sw(126),
      marginTop: sh(30),
      marginBottom: sh(22)
    },
    contentContainer: {
      paddingBottom: sh(82)
    },
    centerText: {
      alignSelf: 'center'
    },
    copy: {
      marginTop: sh(32)
    }
  });

export default createStyles;
