import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      paddingTop: 24,
      paddingBottom: 12,
      borderBottomColor: COLORS.inactive, 
    },
    titleStyle: {
      marginBottom: 12
    }
  });

export default createStyles;
