import {t} from 'i18next';
import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {PropSizeIcon, Rooms, Shawr} from '../../assets/svg';
import CustomText from '../customText';
import createStyles from './styles';

const PropTexts = ({
  price,
  priceSize = 14,
  color = 'black',
  address,
  bedRooms,
  bathRooms,
  size,
}: {
  price: string;
  priceSize?: number;
  color?: string;
  address: string;
  bedRooms: number;
  bathRooms: number;
  size: number;
}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container, row, smallText, middleText} = styles;

  return (
    <View style={container}>
      <CustomText
        size={priceSize}
        text={price + ' ' + t('sar')}
        color={color}
        fontFamily={'bold'}
        num={1}
      />
      <CustomText num={1} containerStyle={middleText} size={12} text={address} color={color} fontFamily={'bold'} />

      <View style={row}>
        <Rooms />
        <CustomText
          size={10}
          text={bedRooms}
          color={'lightGray'}
          fontFamily={'bold'}
          containerStyle={smallText}
          num={1}
        />
        <Shawr />
        <CustomText
          size={10}
          text={bathRooms}
          color={'lightGray'}
          fontFamily={'bold'}
          containerStyle={smallText}
          num={1}
        />
        <PropSizeIcon />
        <CustomText
          size={10}
          text={size}
          color={'lightGray'}
          fontFamily={'bold'}
          containerStyle={smallText}
          num={1}
        />
      </View>
    </View>
  );
};

export default PropTexts;
