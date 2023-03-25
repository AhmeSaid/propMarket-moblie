import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    sortView: {
      backgroundColor: COLORS.white,
      position: 'absolute',
      alignSelf: 'center',
      borderRadius: 10,
      zIndex: 120,
      shadowColor: COLORS.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  });

export default createStyles;
