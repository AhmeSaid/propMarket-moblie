import React, {useMemo} from 'react';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BedRoom} from '../../assets/svg';
import {COLORS} from '../../constants/theme';
import CustomText from '../customText';
import PropTexts from '../PropTexts';
import createStyles from './styles';

const OfferItem = ({item, navigation}: {item: any, navigation: any}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container, image, linearGradient} = styles;
  return (
    <Pressable onPress={() => {
      navigation.navigate('Properity', {id: item?.item?.id});
    }}>
    <ImageBackground
      source={require('../../../assets/image/landing.png')}
      style={container}
      imageStyle={image}>
      <LinearGradient
        colors={[COLORS.whiteRgba(0.01), COLORS.blackRgba(0.8)]}
        style={linearGradient}>
        <PropTexts
          price={item?.item?.price}
          address={item?.item?.address}
          bedRooms={item?.item?.bedrooms_count}
          bathRooms={item?.item?.bathrooms_count}
          size={item?.item?.size}
          color={'white'}
        />
      </LinearGradient>
    </ImageBackground>
    </Pressable>
  );
};

export default OfferItem;
