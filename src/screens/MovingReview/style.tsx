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
      paddingHorizontal: 20,
    },
    nextBtn: {
      backgroundColor: COLORS.primary,
      position: 'absolute',
      bottom: 41,
      alignSelf: 'center',
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
    },
    modalContainer: {
      flex: 1,
      backgroundColor: COLORS.blackRgba(0.1),
      justifyContent: 'center', 
      alignItems: 'center'
    },
    modalBody: {
      width: 320,
      height: 330,
      backgroundColor: COLORS.white,
      borderRadius: 14,
      alignItems: 'center',
      paddingHorizontal: 24
    },
    requestNum: {
      color: COLORS.green
    },
    waitForPrice: {
      marginVertical: 14
    },
    homeButton: {
      backgroundColor: COLORS.primary,
      position: 'absolute',
      bottom: 24
    }
  });

export default createStyles;
