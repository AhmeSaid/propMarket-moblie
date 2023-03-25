import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: COLORS.lightBlue,
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 16,
      paddingHorizontal: 14
    },
    
  });

export default createStyles;
