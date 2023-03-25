import {StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      
      
    },
    titleStyle: {
      marginLeft: sw(20),
      marginVertical: sh(10)
    },
    line:{
      backgroundColor: COLORS.gray,
      height: .5
    }
   
  });

export default createStyles;
