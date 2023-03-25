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
      paddingHorizontal: 20
    },
    nextBtn: {
      position: 'absolute',
      bottom: 41,
      alignSelf: 'center',
    },
    propTypeIcon: {
      width: 13,
      height: 15,
    },
    title: {
      marginTop: 20,
    },
    overrideContainerStyle: {
      marginTop: 15,
      borderColor: COLORS.blue
    }
  });

export default createStyles;
