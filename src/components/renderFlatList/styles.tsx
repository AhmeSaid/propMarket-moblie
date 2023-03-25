import {StyleSheet} from 'react-native';
import {sh, sw, width} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    verticalViewContainer: {
      overflow: 'hidden',
      alignItems: 'center',
      alignSelf: 'center',
    },
    flatListVertical: {
      width: width,
      alignItems: 'center',
    },
    img: {width: '100%', alignSelf: 'center'},
    top: {
      position: 'absolute',
      alignItems: 'flex-end',
      paddingHorizontal: sw(13),
      marginTop: 18,
      paddingVertical: sh(6),
      alignSelf: 'flex-end',
    },
    bottom: {
      alignSelf: 'flex-start',
      marginLeft: sw(18),
      marginVertical: sh(10),
    },
    rowText: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: sh(12),
    },
    padding: {padding: 6},
    icon: {marginLeft: sw(20), marginRight: sw(4)},
    share: {marginLeft: sw(16), marginRight: sw(4)},
    or: {
      marginHorizontal: sw(7.5),
    },
    text: {marginBottom: sh(10)},
  });

export default createStyles;
