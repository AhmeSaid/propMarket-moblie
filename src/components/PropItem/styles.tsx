import {StyleSheet} from 'react-native';
import {sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: sw(189),
    },
   image: {
    width: '100%',
    height: sw(120),
    borderRadius: 12,
    marginBottom: 10
   }
  });

export default createStyles;
