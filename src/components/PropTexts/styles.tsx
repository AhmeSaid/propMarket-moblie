import {StyleSheet} from 'react-native';
import {sh} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
    },
   row: {
    flexDirection: 'row',
    alignItems: 'center'
   },
   smallText: {
    marginLeft:3,
    marginRight: 6
   },
   middleText: {
    marginTop: 4,
    marginBottom: 12
   }
  });

export default createStyles;
