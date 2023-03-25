import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {  flexDirection: 'row', alignItems: 'center' },
    
    sliderContainer: {
      borderRadius: 5,
      borderColor: COLORS.white,
      borderWidth: .5,
      height:10,
      flex: 1,
      marginRight: sw(11),
      overflow: 'hidden'
      
    },
    filledView: {
      backgroundColor: COLORS.white,
      height: '100%',
      borderTopStartRadius: 5,
      borderBottomStartRadius: 5
    }
  });

export default createStyles;
