import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.grayBackground,
    },
    body: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    nextBtn: {
      position: 'absolute',
      bottom: 41,
      alignSelf: 'center',
      width: '100%',
      paddingHorizontal: 20
    },
    row: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      marginTop: 16,
      justifyContent: 'space-between',
    },
    propTypeIcon: {
      width: 13,
      height: 15,
    },
    title: {
      marginTop: 20,
      marginLeft: 20,
    },
    cardButton: {
      width: sw(90),
      height: sw(100),
      paddingTop: 0,
      paddingBottom: 0,
      backgroundColor: COLORS.lightBlue,
      borderColor: COLORS.blue
    },
  });

export default createStyles;
