import {StyleSheet} from 'react-native';
import {
  COLORS, sh, sw,
} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    logo: {
      width: sw(213),
      height: sh(213)
    }
  });

export default createStyles;
