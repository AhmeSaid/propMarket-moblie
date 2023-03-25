import {StyleSheet} from 'react-native';
import {COLORS, sh, SIZES} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    signInBtn: {
      backgroundColor: COLORS.primary,
      borderRadius: 3,
      marginBottom: sh(20)
    },
    signUpBtn: {
      backgroundColor: 'transparent',
      borderRadius: 3,
      borderColor: COLORS.primary,
      borderWidth: 1
    },
    bottomBtns: {
      paddingHorizontal: SIZES.smallPadding
    },
    signUpText: {
      color: COLORS.primary
    },
   
  });

export default createStyles;
