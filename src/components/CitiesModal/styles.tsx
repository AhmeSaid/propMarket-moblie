import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 80,
    },
    body: {
      backgroundColor: COLORS.white,
      flex: 1,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleStyle: {
    },
    inputStyle: {
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderRadius: 0,
      borderColor: COLORS.inactive
    },
    listTitle: {
      marginLeft: 20,
      marginTop: 16,
      marginBottom: 11
    },
    listStyle: {
      marginLeft: 20
    },
    itemContainer: {
      paddingVertical: 11
    },
    closeContainer: {
      paddingLeft: 20,
      paddingVertical: 22,
      paddingRight: 10
    }
  });

export default createStyles;
