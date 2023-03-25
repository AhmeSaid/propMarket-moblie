import {t} from 'i18next';
import React, {useMemo, useState} from 'react';
import {Pressable, View} from 'react-native';
import CustomText from '../customText';
import createStyles from './styles';
import Carousel from 'react-native-snap-carousel';
import {width} from '../../constants/theme';
import moment from 'moment';
import reactotron from 'reactotron-react-native';
import 'moment/locale/ar';

const AvailableDateItem = ({item, onPress}: {item: any, onPress:() => void}) => {
  const styles = useMemo(() => createStyles(), []);

  const {itemContainer, itemDate, itemTime, bookBtn} = styles;
  moment.locale('ar');

  reactotron.log('>>>dd>', moment(item.booking_day).format('ddd'));
  return (
    <View style={itemContainer}>
      <View style={itemDate}>
        <CustomText
          text={
            moment(item.booking_day).format('dddd') +
            ' ' +
            moment(item.booking_day).format('M/D')
          } //moment(item.booking_day).subtract('days').calendar().split('عند')[0]
          color="white"
          size={14}
          fontFamily="bold"
        />
       
      </View>
      <View style={itemTime}>
        <CustomText
          text={moment(item?.slots[0]?.start_date, "HH:mm:ss").format('h:mm a')}
          color="gray"
          size={14}
          fontFamily="bold"
        />
        <CustomText text={t('to')} color="gray" size={14} fontFamily="bold" />
        <CustomText
          text={moment(item?.slots[item.slots.length - 1]?.start_date, "HH:mm:ss").format('h:mm a')}
          color="gray"
          size={14}
          fontFamily="bold"
        />
      </View>

      <Pressable onPress={onPress} style={bookBtn}>
        <CustomText
          text={t('book')}
          color="white"
          size={14}
          fontFamily="bold"
        />
      </Pressable>
    </View>
  );
};

export default AvailableDateItem;
