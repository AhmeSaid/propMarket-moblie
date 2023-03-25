import {StyleSheet} from 'react-native';
import {sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: sw(189),
      height: sw(189),
      justifyContent: 'flex-end',
    },
    image: {
      borderRadius: 12,
    },
    linearGradient: {
      flex: 1,
      justifyContent: 'flex-end',
      borderRadius: 12,
      paddingLeft: 6,
      paddingBottom: 10
    },
  });

export default createStyles;
