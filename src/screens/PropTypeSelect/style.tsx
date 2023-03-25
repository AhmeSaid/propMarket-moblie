import {StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.grayBackground,
    },
    body: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    nextBtn: {
      position: 'absolute',
      bottom: 41,
      alignSelf: 'center',
      paddingHorizontal: 20,
      width: '100%'
    },
    row: {
      flexDirection: 'row', 
      paddingHorizontal: 20,
      marginTop: 16,
      justifyContent: 'space-between'
    },
    propTypeIcon:{
      width: 13,
      height: 15
    },
    separator: {
      width: sw(11)
    },
    overrideContainer: {
      borderWidth: .5,
      
    },
    bedroomsContainer: {
      paddingHorizontal: 20,
    },
    bedroomsText: {
      marginTop: 32,
      marginBottom: 17
    },
    propTypeText: {
      marginTop: 20,
      marginLeft: 20
    },
    cardStyle: {
      borderWidth: 1
    },
   
  });

export default createStyles;
