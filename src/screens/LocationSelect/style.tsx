import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.grayBackground,
    },
    locationInputsContainer: {
      flexDirection: 'row',
      backgroundColor: COLORS.white,
      paddingVertical: 14,
      paddingHorizontal: 20,
      marginBottom: 10
    },
    fromToView: {
      alignItems: 'center',
      height: '100%',
      paddingVertical: 16
    },
    circleView: {
      width: 8,
      height: 8,
      borderRadius: 4,
      borderColor: COLORS.black,
      borderWidth: 1,
    },
    lineView: {
      width: 0.5,
      backgroundColor: COLORS.black,
      flex: 1
    },
    squareView: {
      width: 8,
      height: 8,
      borderColor: COLORS.black,
      borderWidth: 1,
    },
    inputs: {
      flex: 1,
      marginLeft: 14
    },
    input: {
      borderColor: COLORS.inactive,
    },
    fromInput: {
      marginBottom: 8
    },
    resultContainer: {
      flex: 1,
      backgroundColor: COLORS.white,
      paddingHorizontal: 20,
      alignItems: 'center'
    },
    nextBtn: {
      position: 'absolute',
      bottom: 41
    }
  });

export default createStyles;
