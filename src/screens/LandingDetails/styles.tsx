import {NativeModules, Platform, StyleSheet} from 'react-native';
import {COLORS, sh, SIZES, sw, width} from '../../constants/theme';
const {StatusBarManager} = NativeModules;

const createStyles = () =>
  StyleSheet.create({
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
      alignSelf: 'center',
      paddingTop: StatusBarManager.HEIGHT,
    },

    locView: {
      flex: 1,
      width: width - SIZES.smallPadding,
      backgroundColor: '#fff',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },

      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      borderRadius: 10,
      marginTop: sh(14),
      paddingHorizontal: sw(28),
      marginHorizontal: SIZES.smallPadding,
      paddingBottom: 30,
    },
    close: {
      textAlign: 'center',
      marginBottom: sh(16),
      alignSelf: 'flex-end',
    },
    x: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '400',
      marginTop: sh(11),
    },
    locTextContainer: {textAlign: 'center', marginBottom: sh(16)},
    locText: {fontSize: 20, textAlign: 'center'},
    locButt: {borderRadius: 10},
    flatlistDetails: {
      alignSelf: 'center',
      width: width,
    },

    flatlist2: {
      flexGrow: 1,
      // zIndex: 1,
    },

    verticalView: {
      marginTop: sh(20),

      marginBottom: sh(8),
      // width: '100%',
      // width: sw(384),
      // alignSelf: 'center',
      // resizeMode: 'stretch',
    },

    img: {
      width: width - SIZES.smallPadding,
      // paddingHorizontal: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignSelf: 'center',
    },

    recommendation: {
      marginBottom: sh(8),
      marginHorizontal: SIZES.smallPadding / 2,
    },

    ball: {
      marginRight: 4,
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: COLORS.primary,
    },
    unselectBall: {
      marginRight: 4,
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#94D0F2',
    },
    ballView: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,
    },
    virticalView: {
      alignItems: 'center',
      width: width,
    },
  });

export default createStyles;
