import React, {useMemo} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {BedRoom} from '../../assets/svg';
import CustomText from '../customText';
import PropTexts from '../PropTexts';
import createStyles from './styles';

const PropItem = ({item, navigation}: {item: any, navigation: any}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container, image} = styles;

  return (
    <Pressable
    onPress={() => {
      navigation.navigate('Properity', {id: item?.item?.id});
    }}
    style={container}>
      <Image
        source={require('../../../assets/image/landing.png')}
        style={image}
      />

      <PropTexts
        price={item?.item?.price}
        address={item?.item?.address}
        bedRooms={item?.item?.bedrooms_count}
        bathRooms={item?.item?.bathrooms_count}
        size={item?.item?.size}
      />
    </Pressable>
  );
};

export default PropItem;
