import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    stiderContainer: {
      width: '100%', 
      backgroundColor: COLORS.white,
      paddingVertical: 14,
      paddingHorizontal: 20,
      marginBottom: 14
    },
    overrideSilerContainer: {
      backgroundColor: COLORS.white,
      borderWidth: .5,
      borderColor: COLORS.lightGray
    },
    overrideFilledView: {
      backgroundColor: COLORS.green
    },
    overrideContainerStyle: {
      marginTop: 13
    }
  });

export default createStyles;
