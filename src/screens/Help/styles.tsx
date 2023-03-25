import {NativeModules, StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';
const {StatusBarManager} = NativeModules;

const createStyles = () =>
  StyleSheet.create({
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
      alignSelf: 'center',
      paddingTop: StatusBarManager.HEIGHT,
    },
    container: {
      paddingHorizontal: sw(16),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      marginBottom: sh(15),
    },
    icons: {
      marginRight: sw(11),
    },
    smallText: {
      fontSize: 16,
      fontWeight: '400',
    },
    text: {fontSize: 20, fontWeight: '400'},
  });

export default createStyles;
