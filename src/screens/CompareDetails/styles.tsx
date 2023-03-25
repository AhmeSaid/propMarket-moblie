import {NativeModules, Platform, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw, width} from '../../constants/theme';
const {StatusBarManager} = NativeModules;

const createStyles = () =>
  StyleSheet.create({
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
      alignSelf: 'center',
      width: '100%',
    },
  });

export default createStyles;
// rowView: {
//   flexDirection: 'row',
//   alignSelf: 'center',
//   justifyContent: 'space-between',
//   marginHorizontal: sw(20),
//   height: sh(45),
//   alignItems: 'center',
// },
// icons: {height: '100%', alignItems: 'center', flexDirection: 'row'},
// pin: {marginRight: sw(30)},
// select: {
//   alignSelf: 'center',
//   flexDirection: 'row',
//   width: width - sw(32),
//   justifyContent: 'space-around',
//   alignItems: 'center',
// },
// border: {
//   borderColor: COLORS.primary,
// },
// over: {
//   width: width - sw(32),
//   alignSelf: 'center',
// },
// sec: {
//   backgroundColor: COLORS.primary,
//   flex: 1,
//   alignSelf: 'flex-start',
//   paddingHorizontal: 18,
//   borderRadius: 9,
// },
// third: {
//   backgroundColor: COLORS.primary,
//   flex: 1,
//   alignSelf: 'flex-start',
//   paddingHorizontal: 10,
//   borderRadius: 9,
// },
// seeMore: {alignSelf: 'center', marginVertical: sh(5)},
// prop: {alignSelf: 'center', paddingHorizontal: sw(16)},
