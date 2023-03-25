import {Platform, StyleSheet} from 'react-native';
import {COLORS, sh, sw} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
    left: {
      backgroundColor: COLORS.grayBackground,
      flex: 1,
    },
    right: {
      backgroundColor: COLORS.primary,
      flex: 1,
    },
    overContainer: {
      width: '100%',

      flexGrow: 1,
    },
    topContainer: {
      backgroundColor: COLORS.grayBackground,
    },
    top: {
      width: '100%',
      borderBottomLeftRadius: 30,
      backgroundColor: COLORS.primary,
      paddingTop: Platform.OS == 'ios' ? sh(55): sh(25),
      paddingLeft: 20,
    },
    bottomContainer: {
      backgroundColor: COLORS.primary,
      // flex: 1,
    },
    bottom: {
      borderTopRightRadius: 30,
      backgroundColor: COLORS.grayBackground,
      overflow: 'hidden',
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: sh(18),
    },
    location: {
      backgroundColor: COLORS.whiteRgba(0.16),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      marginLeft: 10,
    },
    locationText: {
      marginRight: 8,
    },
    searchContainer: {
      width: '100%',
      height: sh(45),
      backgroundColor: COLORS.white,
      borderRadius: 8,
      marginTop: sh(20),
      paddingLeft: 14,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: sh(15),
    },
    placholder: {
      marginLeft: 8,
    },
    iconAndTextSearch: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    selectContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    selectItem: {
      backgroundColor: COLORS.whiteRgba(0.16),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 22,
      paddingVertical: 11,
      borderRadius: 20,
      marginRight: 8,
      borderColor: COLORS.white,
    },
    selectItemIcon: {
      marginLeft: 4,
    },
    row: {
      width: '100%',
      paddingRight: 20,
    },
    homeLogo: {
      right: -sw(15),
      position: 'absolute',
    },
    searchWrap: {
      paddingRight: 20,
    },
    logoTextWrap: {
      position: 'absolute',
      top: sh(70),
      right: 20,
    },
    selectedToU: {
      marginTop: sh(20),
    },
    title: {
      marginLeft: 20,
    },
    separator: {
      width: 8,
      height: sh(6),
    },
    selectedToUFlatList: {
      paddingHorizontal: 20,
      marginTop: 14,
    },
    offersContainer: {
      backgroundColor: COLORS.white,
      width: '100%',
      padding: 20,
      borderRadius: 24,
      marginTop: 20,
    },
    offerHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14,
    },
    offersFlatlist: {
      justifyContent: 'space-between',
    },
    scroll: {
      borderTopRightRadius: 30,
    },
    scrollContent: {
      paddingBottom: 420,
    },
    filterPress: {
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: 14,
      marginLeft: 8,
    },
    selectToSearch: {
      width: '100%',
    },
    overrideSlider: {
      marginTop: sh(11),
      // marginBottom: sh(16)
    },
    buttonWrap: {
      paddingRight: 20,
      flexDirection: 'row',
      marginVertical: 14
    },
    btn: {
      backgroundColor: COLORS.whiteRgba(0.16),
      borderRadius: 8,
      flex: 1
    },
    backBtn: {
      marginLeft: 10
    },
    lastSearch: {
      flex: 1
    },
    lastSearchItem: {
      height: 35,
     width: 201
    },
    lastSearchSeparator: {
      width: 8
    },
    sliderContainer:{
      marginVertical: 12,
    },
    lastSearchText: {
      marginBottom: 10
    },
    furAndKitch: {
      flexDirection: 'row', 
      paddingHorizontal: 20,
      marginTop: 26,
      justifyContent: 'space-between'
    }
  });

export default createStyles;
