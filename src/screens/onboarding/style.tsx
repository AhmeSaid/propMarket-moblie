import { bindActionCreators } from '@reduxjs/toolkit';
import {I18nManager, StyleSheet} from 'react-native';
import {
  COLORS, sh, SIZES, sw,
} from '../../constants/theme';

const createStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: COLORS.background,
      
    },
    contentContainer: {
      justifyContent: 'space-between',
      flexGrow: 1,
      marginBottom: sh(50)
    },
    imageBackground: {
        width: '100%',
        paddingTop: sh(100),
    },
    customCarouselContainer: {
      flexGrow:0,
    },
    carouselImage: {
      width: '100%',
      resizeMode: 'contain',
      justifyContent: 'center',
      maxHeight: sh(478),
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
      alignItems: 'center',
      marginBottom: sh(76)
    },
    onboardingHeader: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      top: sh(60),
      paddingHorizontal: SIZES.smallPadding,
      position: 'absolute',
      
    },
    carouselItemContainer:{
      alignItems: 'center',
      paddingHorizontal: SIZES.smallPadding
    },
    langContainer:{
      width: sw(28),
      height: sw(28),
      backgroundColor: COLORS.white,
      borderRadius: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imgstyle: {
      height: sh(478),
      width: '100%',
      
    },
    desc: {
      textAlign: 'center',
      width: sw(280),
      lineHeight: sh(34),
      marginTop: sh(10)
    },
    
    dots: {
      height: 10,
      borderRadius: 5,
      marginHorizontal: 3
    },
    dotsContainer: {
      flexDirection: 'row',
      alignSelf: 'center'
    }
  });

export default createStyles;
