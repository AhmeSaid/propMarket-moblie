import {StyleSheet} from 'react-native';
import {COLORS, height, sh, sw, width} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.blackRgba(0.5),
      position: 'absolute',
      width: width,
      height: '100%',
      justifyContent: 'flex-end',
    },
    picker: {
      backgroundColor: COLORS.inactiveBtn,
    },
    doneContainer: {
      width: '100%',
      backgroundColor: COLORS.inActive2,
    },
    doneBtn: {
      paddingVertical: 8,
      paddingHorizontal: 20,
    },
  });

export default createStyles;
