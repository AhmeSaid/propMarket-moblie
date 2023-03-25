import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: { flex: 1, },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: COLORS.inactive,
      marginTop: 4,
    },
    title: {
      alignSelf: 'center',
      marginTop: 26,
      marginBottom: 24,
    },
    visitText: {
      alignSelf: 'center',
      marginTop: 24,
    },
    timeContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    timeItemContainer: {
      backgroundColor: COLORS.lightBlue,
      width: sw(124),
      height: sh(36),
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: sh(16)
    },
    confirmBtn: {
      backgroundColor: COLORS.primary,
      borderRadius: 3,
      marginBottom: sh(40),
    },
    bottom: {
      flex: 1,
      justifyContent: 'space-between',
    },
    separate: {
      width:10
    }
  });

export default createStyles;
